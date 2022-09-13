import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { zIndex } from "../../../../configs";
import { NOTIFICATION_DURATION, NOTIFICATION_TRANSITION_TIME } from "../../../../configs/constants";
import { delay, percent, second } from "../../../../helpers";
import { dispatches, states } from "../redux";

const iconPath = 'https://static.vecteezy.com/system/resources/previews/009/758/416/original/phone-and-sound-icon-isolated-contour-symbol-illustration-vector.jpg';

const useStyles = makeStyles({
    rootContainer: {
        zIndex: zIndex.homeScreen.notification,
        height: '10%',
        width: '70%',
        backgroundColor: 'white',
        transition: `all ${second(NOTIFICATION_TRANSITION_TIME)}ms ease`,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: 0.95,
        overflow: 'hidden',
    },
    notificationTopContainer: {
        height: '40%',
        width: '90%',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    notificationLeftSideContainer: {
        width: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notificationRightSideContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationIcon: {
        maxHeight: '90%',
    },
    notificationConstant: {
    },
    notificationBody: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
});

const Notification = ({
    playground,
    notification,
    isMobile,
    setNotification,
}) => {
    const classes = useStyles();

    const [display, setDisplay] = useState('');
    const [top, setTop] = useState('-100%');

    const borderRadius = playground.width ? playground.width * percent(2) : 0;
    const notificationTransitionY = -top * (isMobile ? 1.2 : 1.5);

    useEffect(() => {
        if (notification) {
            setDisplay(notification);
            delay(() => setNotification(''), second(NOTIFICATION_DURATION));
        }
    }, [notification]);

    return (
        <div className={classes.rootContainer}
            style={{
                borderRadius,
                translate: `0px ${notification ? notificationTransitionY : 0}px`,
                top
            }}
            ref={ref => ref && setTop(-ref.clientHeight * 1.1)}
        >
            <div className={classes.notificationTopContainer}>
                <div className={classes.notificationLeftSideContainer}>
                    <img className={classes.notificationIcon} src={iconPath}/>
                    <div className={classes.notificationConstant}>
                        Notification
                    </div>
                </div>
                <div className={classes.notificationRightSideContainer}>
                    now
                </div>
            </div>
            <div className={classes.notificationBody}>
                <div style={{
                    marginLeft: '5%',
                }}>
                    {display}
                </div>
            </div>
        </div>
    );
};

export default connect(states, dispatches)(Notification);