import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { backgroundImageSource, NOTIFICATION_DURATION } from "../../../configs/constants";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";
import { dispatches, states } from "./redux";
import HeartAnimation from '../../Heart Animation';
import BackgroundAnimations from "./BackgroundAnimations";
import { useEffect } from "react";
import { delay, second } from "../../../helpers";
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
    setNotification,
    setActiveApp,
}) => {
    const classes = useStyles();
    
    const isActive = activeApp !== null;

    useEffect(() => {
        const date = new Date();
        const anniversaryDate = new Date(anniversary);

        if (date.getDate() === anniversaryDate.getDate()) {
            // yearly anni
            if (date.getMonth() === anniversaryDate.getMonth()) {
                delay(
                    () => setNotification("YEARLY ANNI"),
                    second(NOTIFICATION_DURATION)
                );
            }
            // monthly anni
            else {
                if (date.getFullYear() - anniversaryDate.getFullYear() > 1) {
                    delay(
                        () => setNotification(`Happy ${1}!`),
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
        >
            <Notification />
            <Apps />
            <PageSelection />
            <Dock />
            <BackgroundAnimations />
        </div>
    );
};

export default connect(states, dispatches)(HomeScreen);
