import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
    ACTIVE_TIME,
    APP_LEVEL_GAPS,
    APP_SIDE_GAPS,
    CENTERING_TIME,
    TRANSITIONING_TIME,
    zIndex,
} from "../../../../../configs/constants";
import { percent, sleep, wake } from "../../../../../helpers";
import { dispatches, states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        marginTop: `${APP_LEVEL_GAPS}%`,
        marginLeft: `${APP_SIDE_GAPS}%`,
        marginRight: `${APP_SIDE_GAPS}%`,
        transition: `all ${CENTERING_TIME}ms ease`,
    },
    app: {
        marginBottom: "10%",

        "&:active": {
            opacity: 0.4,
        },
    },
    image: {
        borderRadius: "25%",
        height: "100%",
        width: "100%",
        transition: `opacity ${CENTERING_TIME}ms ease-in-out`,
    },
    appName: {
        width: "100%",
        maxWidth: "100%",
        fontSize: 14,
        color: "white",
        textAlign: "center",
        transition: `all ${CENTERING_TIME}ms ease`,
    },
    descriptionBubble: {
        backgroundColor: "white",
        position: "absolute",
        color: "black",
        textAlign: "center",
        borderRadius: 10,
        border: "1px solid black",
        zIndex: 1,
        top: "100%",
        padding: "5%",

        fontSize: 9,
    },
});

const App = ({
    name,
    appNumber,
    activeApp,
    collection,
    appSize,
    playground,
    description,
    setActiveApp,
    setDescription,
}) => {
    const inactiveCleanup = () => {
        if (appRef.current) {
            appRef.current.style = null;
            animationRef.current.active = false;
            wake(animationRef.current);
        }
    };

    const classes = useStyles();

    const [currentMedia, setCurrentMedia] = useState(0);

    const appRef = useRef();
    const animationRef = useRef({
        active: false,
    });

    const isActive = activeApp === appNumber;
    const inactiveAnimation = activeApp === null;

    useEffect(() => {
        if (playground) {
            const { width, height } = playground;
            const playgroundWidth = width;
            const playgroundHeight = height;
            const appLeft = appRef.current?.offsetLeft;
            const appTop = appRef.current?.offsetTop;

            if (isActive) {
                const { x, y } = appRef.current.getBoundingClientRect();
                const clientCenterX = playgroundWidth / 2;
                const clientCenterY = playgroundHeight / 2;
                const quadrant = calculateQuadrant(
                    clientCenterX,
                    clientCenterY,
                    appLeft,
                    appTop
                );
                const style = appRef.current.style;
                const info = {
                    x,
                    y,
                    quadrant,
                    style,
                    clientCenterX,
                    clientCenterY,
                    appSize,
                    collection,
                    currentMedia,
                    animationRef,
                    setCurrentMedia,
                    setActiveApp,
                };

                animationRef.current.active = true;
                startAnimation(info);
            } else if (!isActive && animationRef.current.active) {
                inactiveCleanup();
            }
        }
    }, [isActive]);

    return (
        <div
            className={classes.rootContainer}
            style={{
                opacity: isActive || inactiveAnimation ? 1 : 0,
                pointerEvents: inactiveAnimation ? null : "none",
            }}
            onMouseOver={() => {
                if (inactiveAnimation)
                    setDescription(collection[0].description);
            }}
            onMouseLeave={() => setDescription()}
        >
            <div
                className={classes.app}
                style={{
                    height: appSize,
                    width: appSize,
                    minHeight: appSize,
                    minWidth: appSize,
                }}
            >
                {collection && (
                    <img
                        className={classes.image}
                        src={collection?.[currentMedia]?.baseUrl}
                        ref={appRef}
                        alt=""
                        onClick={() => {
                            // if (!isActive || activeApp !== null)
                            if (inactiveAnimation)
                                setActiveApp(appNumber);
                        }}
                    />
                )}
                {description && (
                    <div className={classes.descriptionBubble}>
                        {description}
                    </div>
                )}
            </div>
            <div
                className={classes.appName}
                style={{
                    height: appSize / 2,
                    maxWidth: appSize,
                    fontSize: calcFontSize(appSize),
                    opacity: inactiveAnimation ? 1 : 0,
                }}
            >
                {name}
            </div>
        </div>
    );
};

const calcFontSize = (appSize) => {
    const ratio = 4.5;
    return Math.round(appSize / ratio);
};

const calculateQuadrant = (gridX, gridY, appLeft, appTop) => {
    /*  QUADRANT
     *  -------
     * | 2 | 1 |
     * |---+---|
     * | 3 | 4 |
     *  -------
     */

    // positive X
    if (appLeft > gridX) {
        // positive y
        if (appTop < gridY) {
            return 1;
        }
        // negative Y
        else {
            return 4;
        }
    }
    // negative X
    else {
        // positive Y
        if (appTop < gridY) {
            return 2;
        }
        // negative Y
        else {
            return 3;
        }
    }
};

const startAnimation = async (info) => {
    await center(info);
    await expand(info);
    await transition(info);
};

const center = async (info) => {
    const {
        x,
        y,
        quadrant,
        clientCenterX,
        clientCenterY,
        style,
        appSize,
        animationRef,
    } = info;

    if (!animationRef.current.active) return;

    const appCenterX = x + appSize / 2;
    const appCenterY = y + appSize / 2;

    let centerAmountX;
    let centerAmountY;

    switch (quadrant) {
        case 1:
            centerAmountX = -(appCenterX - clientCenterX);
            centerAmountY = clientCenterY - appCenterY;
            break;
        case 2:
            centerAmountX = clientCenterX - appCenterX;
            centerAmountY = clientCenterY - appCenterY;
            break;
        case 3:
            centerAmountX = clientCenterX - appCenterX;
            centerAmountY = -(appCenterY - clientCenterY);
            break;
        default:
            centerAmountX = -(appCenterX - clientCenterX);
            centerAmountY = -(appCenterY - clientCenterY);
            break;
    }

    style.transition = `all ${CENTERING_TIME}ms ease`;
    style.transform = `translate(${centerAmountX}px, ${centerAmountY}px)`;
    style.zIndex = zIndex.app;
    style.position = "absolute";
    style.maxHeight = `${appSize}px`;
    style.maxWidth = `${appSize}px`;

    await sleep(CENTERING_TIME, animationRef.current);
};

const expand = async (info) => {
    const { clientCenterX, animationRef } = info;

    if (!animationRef.current.active) return;

    const maxAppSizeRatio = percent(80);
    const maxAppSize = clientCenterX * 2 * maxAppSizeRatio;
    info.appSize = maxAppSize;
    await center(info);
};

const transition = async (info) => {
    const {
        collection,
        currentMedia,
        style,
        animationRef,
        setCurrentMedia,
        setActiveApp,
    } = info;

    if (!animationRef.current.active) return;

    const fadeOut = async () => {
        style.opacity = "0";
        await sleep(TRANSITIONING_TIME, animationRef.current);
    };
    const fadeIn = async () => {
        style.opacity = "1";
        await sleep(TRANSITIONING_TIME, animationRef.current);
    };
    const changeMedia = async () => {
        info.currentMedia += 1;
        setCurrentMedia(currentMedia + 1);
    };

    await sleep(ACTIVE_TIME, animationRef.current);

    if (currentMedia + 1 < collection.length) {
        await fadeOut();
        await changeMedia();
        await fadeIn();
        transition(info);
    } else {
        setCurrentMedia(0);
        setActiveApp(null);
    }
};

export default connect(states, dispatches)(App);
