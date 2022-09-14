import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { backgroundImageSource, NOTIFICATION_DURATION } from "../../../configs/constants";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";
import { dispatches, states } from "./redux";
import HeartAnimation from '../../Heart Animation';
import BackgroundAnimations from "./BackgroundAnimations";
import { useEffect, useState } from "react";
import { delay, percent, second } from "../../../helpers";
import Notification from "./Notification";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

const HomeScreen = ({
    activeApp,
    anniversary,
    playground,
    currentPage,
    numOfPages,
    setNotification,
    setActiveApp,
    setCurrentPage,
}) => {
    const classes = useStyles();
    
    const [capturedPosition, setCapturedPosition] = useState(0);

    const isActive = activeApp !== null;

    useEffect(() => {
        const date = new Date();
        const anniversaryDate = new Date(anniversary);

        if (date.getDate() === anniversaryDate.getDate()) {
            // yearly anni
            if (date.getMonth() === anniversaryDate.getMonth()) {
                const numOfYears = date.getFullYear() -  anniversaryDate.getFullYear();
                delay(
                    () => setNotification(`Happy ${numOfYears} year${numOfYears > 1 ? 's' : ''}!`),
                    second(NOTIFICATION_DURATION)
                );
            }
            // monthly anni
            else {
                if (date.getFullYear() - anniversaryDate.getFullYear() > 1) {
                    delay(
                        () => setNotification(`Happy ${1} year!`),
                        second(NOTIFICATION_DURATION)
                    );
                }
                else {
                    delay(
                        () =>
                            setNotification(
                                `Happy ${
                                    date.getMonth() - anniversaryDate.getMonth()
                                } months!`
                            ),
                        second(NOTIFICATION_DURATION)
                    );
                }
            }
        }

    }, []);

    return (
        <div
            className={classes.rootContainer}
            onClick={() => isActive && setActiveApp(null)}
            onMouseDown={e => setCapturedPosition(e.clientX)}
            onMouseUp={e => changePage(e.clientX, capturedPosition, currentPage, numOfPages, setCurrentPage, playground.width)}
            onTouchStart={e => setCapturedPosition(e.changedTouches[0].screenX)}
            onTouchEnd={e => changePage(e.changedTouches[0].screenX, capturedPosition, currentPage, numOfPages, setCurrentPage, playground.width)}
        >
            <Notification />
            <Apps />
            <PageSelection />
            <Dock />
            <BackgroundAnimations />
        </div>
    );
};

const changePage = (finalPosition, startPosition, currentPage, numOfPages, setCurrentPage, playgroundWidth) => {
    const difference = finalPosition - startPosition;
    const changePage = Math.abs(difference) > (playgroundWidth * percent(10));

    if (changePage) {
        const nextPage = difference > 0 ? Math.max(currentPage - 1, 0) : Math.min(currentPage + 1, numOfPages - 1);
        setCurrentPage(nextPage);
    }
};

export default connect(states, dispatches)(HomeScreen);
