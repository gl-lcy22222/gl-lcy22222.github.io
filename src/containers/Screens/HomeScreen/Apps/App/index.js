import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { zIndex } from "../../../../../configs";
import {
    ACTIVE_TIME,
    APP_LEVEL_GAPS,
    APP_SIDE_GAPS,
    CENTERING_TIME,
    TRANSITIONING_TIME,
} from "../../../../../configs/constants";
import { percent, sleep, wake } from "../../../../../helpers";
import { dispatches, states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        marginTop: `${APP_LEVEL_GAPS}%`,
        marginLeft: `${APP_SIDE_GAPS}%`,
        marginRight: `${APP_SIDE_GAPS}%`,
        transition: `all ${CENTERING_TIME}ms ease`,
        '-webkit-tap-highlight-color': 'transparent',

        '&:hover': {
            cursor: 'pointer',
        }
    },
    app: {
        marginBottom: "10%",
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
        position: 'relative'
    },
    descriptionActiveBubble: {
        backgroundColor: "white",
        position: "absolute",
        color: "black",
        textAlign: "center",
        borderRadius: 10,
        border: "1px solid black",
        zIndex: zIndex.descriptionActiveBubble,
        padding: "5%",
        maxHeight: '200%',
        overflow: 'auto',
        alignSelf: 'center',
        left: 0,
        right: 0,
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
});

const App = ({
    appNumber,
    app,
    activeApp,
    appSize,
    maxAppsPerPage,
    playground,
    setActiveApp,
}) => {
    
    const inactiveCleanup = () => {
        if (appRef.current) {
            animationRef.current.active = false;
            appRef.current.style = null;
            wake(animationRef.current);
            setDescriptionActive(false);
        }
    };
    
    const classes = useStyles();
    
    const [currentMedia, setCurrentMedia] = useState(0);
    const [descriptionActive, setDescriptionActive] = useState(false);
    
    const appRef = useRef();
    const animationRef = useRef({
        active: false,
    });
    
    const isActive = activeApp === appNumber;
    const inactiveAnimation = activeApp === null;
    const isLastRow = lastRow(appNumber, maxAppsPerPage);
    const name = app?.name;
    const collection = app?.collection;
    const description = app?.description;

    useEffect(() => {
        if (playground) {
            const { width, height } = playground;
            const playgroundWidth = width;
            const playgroundHeight = height;
            const appLeft = appRef.current?.offsetLeft;
            const appTop = appRef.current?.offsetTop;

            if (isActive) {
                const { x, y } = appRef.current.getBoundingClientRect();
                const xInterceptPosition = window.innerWidth / 2;
                const yInterceptPosition = window.innerHeight / 2;
                const quadrant = calculateQuadrant(
                    xInterceptPosition,
                    yInterceptPosition,
                    appLeft,
                    appTop
                );
                const style = appRef.current.style;
                const info = {
                    x,
                    y,
                    quadrant,
                    style,
                    playgroundWidth,
                    xInterceptPosition,
                    yInterceptPosition,
                    appSize,
                    collection,
                    currentMedia,
                    animationRef,
                    setActiveApp,
                    setCurrentMedia,
                    setDescriptionActive,
                };

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
                pointerEvents: !inactiveAnimation || !app ? "none" : null,
            }}
            onMouseOver={() => {
                if (inactiveAnimation)
                    setDescriptionActive(true);
            }}
            onMouseLeave={() => setDescriptionActive(false)}
        >
            <div
                className={classes.app}
                style={{
                    height: appSize,
                    width: appSize,
                    minHeight: appSize,
                    minWidth: appSize,
                    position: descriptionActive ? 'relative' : null,
                }}
            >
                {collection && (
                    <img
                        className={classes.image}
                        src={collection?.[currentMedia]?.baseUrl}
                        ref={appRef}
                        alt=""
                        onClick={e => {
                            if (inactiveAnimation)
                                setActiveApp(appNumber);
                            else {
                                e.preventDefault();
                            }
                        }}
                    />
                )}
                {descriptionActive && (
                    <div className={classes.descriptionActiveBubble}
                        style={{
                            fontSize: calcFontSize(appSize),
                            top: isLastRow ? null : '110%',
                            bottom: isLastRow ? '110%' : null,  
                        }}
                        onClick={() => setDescriptionActive(false)}
                    >
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
                onClick={() => setDescriptionActive(!descriptionActive)}
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

const lastRow = (appNumber, maxAppsPerPage) => {
    const mod = appNumber % maxAppsPerPage;
    return maxAppsPerPage - 4 <= mod && mod < maxAppsPerPage;
};

const startAnimation = async (info) => {
    const { animationRef, setDescriptionActive} = info;

    animationRef.current.active = true;
    setDescriptionActive(false);

    await center(info);
    await expand(info);
    await transition(info);
};

const center = async (info) => {
    const {
        x,
        y,
        quadrant,
        xInterceptPosition,
        yInterceptPosition,
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
            centerAmountX = -(appCenterX - xInterceptPosition);
            centerAmountY = yInterceptPosition - appCenterY;
            break;
        case 2:
            centerAmountX = xInterceptPosition - appCenterX;
            centerAmountY = yInterceptPosition - appCenterY;
            break;
        case 3:
            centerAmountX = xInterceptPosition - appCenterX;
            centerAmountY = -(appCenterY - yInterceptPosition);
            break;
        default:
            centerAmountX = -(appCenterX - xInterceptPosition);
            centerAmountY = -(appCenterY - yInterceptPosition);
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
    const { playgroundWidth, animationRef } = info;

    if (!animationRef.current.active) return;

    const maxAppSizeRatio = percent(80);
    const maxAppSize = playgroundWidth * maxAppSizeRatio;
    info.appSize = maxAppSize;
    await center(info);
};

const transition = async (info, activeTime = 500) => {
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
        if (!animationRef.current.active) return;
        style.opacity = "0";
        await sleep(TRANSITIONING_TIME, animationRef.current);
    };
    const fadeIn = async () => {
        if (!animationRef.current.active) return;
        style.opacity = "1";
        await sleep(TRANSITIONING_TIME, animationRef.current);
    };
    const changeMedia = async () => {
        if (!animationRef.current.active) return;
        info.currentMedia += 1;
        setCurrentMedia(currentMedia + 1);
    };

    await sleep(activeTime, animationRef.current);

    if (currentMedia + 1 < collection.length) {
        await fadeOut();
        await changeMedia();
        await fadeIn();
        transition(info, ACTIVE_TIME);
    } else {
        await fadeOut();
        setCurrentMedia(0);
        setActiveApp(null);
    }
};

export default connect(states, dispatches)(App);
