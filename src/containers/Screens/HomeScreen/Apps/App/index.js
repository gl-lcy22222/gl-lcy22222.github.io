import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
    APP_LEVEL_GAPS,
    APP_SIDE_GAPS,
    CENTERING_TIME,
} from "../../../../../configs/constants";
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
        transition: `all ${CENTERING_TIME}ms ease`,
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
    setActiveApp,
}) => {
    const classes = useStyles();

    const [centerAmountX, setCenterAmountX] = useState(0);
    const [centerAmountY, setCenterAmountY] = useState(0);

    const appRef = useRef();

    const animationInactive = activeApp === null;
    const isActive = activeApp === appNumber;
    
    useEffect(() => {
        const root = document.getElementById("root");
        const { clientWidth, clientHeight } = root;
        const appLeft = appRef.current?.offsetLeft;
        const appTop = appRef.current?.offsetTop;

        if (isActive) {
            const { x, y } = appRef.current.getBoundingClientRect();
            const clientCenterX = clientWidth / 2;
            const clientCenterY = clientHeight / 2;
            const appCenterX = x + (appSize / 2);
            const appCenterY = y + (appSize / 2);
            const quadrant = calculateQuadrant(
                clientCenterX,
                clientCenterY,
                appLeft,
                appTop
            );

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


            setCenterAmountX(centerAmountX);
            setCenterAmountY(centerAmountY);

            // // appRef.current.style = {
            // //     position: "absolute",
            // //     height: "300px",
            // // };
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
                        src={collection?.[0]?.baseUrl}
                        ref={appRef}
                        alt=""
                        onClick={() => setActiveApp(appNumber)}
                        style={{
                            height: appSize,
                            width: appSize,
                            minHeight: appSize,
                            minWidth: appSize,
                            transform: `translate(${centerAmountX}px, ${centerAmountY}px)`,
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

export default connect(states, dispatches)(App);
