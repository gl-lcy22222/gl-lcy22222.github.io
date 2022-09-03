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
import { percent, sleep } from "../../../../../helpers";
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
});

const App = ({
    name,
    appNumber,
    activeApp,
    collection,
    appSize,
    playground,
    setActiveApp,
}) => {
    const inactiveCleanup = () => {
        if (appRef.current) {
            appRef.current.style.transition = `opacity ${CENTERING_TIME}ms ease-in-out`;
            appRef.current.style = null;
        }
    };

    const classes = useStyles();

    const [currentMedia, setCurrentMedia] = useState(0);

    const appRef = useRef();

    const animationInactive = activeApp === null;
    const isActive = activeApp === appNumber;

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
                    setCurrentMedia,
                    setActiveApp,
                };

                startAnimation(info);
            } else {
                inactiveCleanup();
            }
        }
    }, [isActive]);

    return (
        <div
            className={classes.rootContainer}
            style={{
                opacity: isActive || animationInactive ? 1 : 0,
                pointerEvents: animationInactive ? null : "none",
            }}
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
                        onClick={() => (!isActive || animationInactive) && setActiveApp(appNumber)}
                        style={{
                            height: appSize,
                            width: appSize,
                            minHeight: appSize,
                            minWidth: appSize,
                            opacity: isActive || activeApp === null ? 1 : 0,
                        }}
                    />
                )}
            </div>
            <div
                className={classes.appName}
                style={{
                    height: appSize / 2,
                    maxWidth: appSize,
                    fontSize: calcFontSize(appSize),
                    opacity:
                        animationInactive || activeApp !== appNumber ? 1 : 0,
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
    } = info;

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

    await sleep(CENTERING_TIME);
};

const expand = async (info) => {
    console.log("HERE-x-x-")

    const { clientCenterX } = info;
    const maxAppSizeRatio = percent(80);
    const maxAppSize = clientCenterX * 2 * maxAppSizeRatio;
    info.appSize = maxAppSize;
    await center(info);
};

const transition = async info => {
    // TODO: need to fix clicking an app to make active, then quickly inactivate it then click another app, itll stay opened miday 
    const { collection, currentMedia, style, setCurrentMedia, setActiveApp } = info;
    const fadeOut = async () => {
        style.opacity = '0';
        await sleep(TRANSITIONING_TIME);
    };
    const fadeIn = async () => {
        style.opacity = '1';
        await sleep(TRANSITIONING_TIME);
    };
    const changeMedia = async () => {
        info.currentMedia += 1;
        setCurrentMedia(currentMedia + 1);
    };

    await sleep(ACTIVE_TIME);

    if (currentMedia + 1 < collection.length) {
        await fadeOut();
        await changeMedia();
        await fadeIn();
        transition(info);
    }
    else {
        setActiveApp(null);
    }
};

export default connect(states, dispatches)(App);
