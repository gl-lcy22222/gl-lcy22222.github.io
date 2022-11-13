import { makeStyles } from "@material-ui/styles";
import Countdown from "./Countdown";
import countdowns from '../../../../setup/redux/data/countdowns.js';
import { useState } from "react";
import { multiply } from "../../../../helpers";

const useStyles = makeStyles({
    rootContainer: {
        // flex: '1',
        // marginBottom: '10%',
        // marginTop: '5%',
        overflow: 'auto',
        width: '90%',
        position: 'relative',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    notification: {
        marginTop: '1%',
        height: 'auto',
    }
});


const Notifications = () => {
    const classes = useStyles();

    const [expandedGroups, setExpandedGroups] = useState(true);
    const currentDate = new Date();

    const notifications = [
        ...countdowns
        .filter(countdown => new Date(countdown.date) >= currentDate)
        .slice(0, 1)
        .map((countdown, i) => {
            return (i, numOfNotifications) => (
                <div
                    className={classes.notification}
                    style={getStyles(expandedGroups, i, numOfNotifications)}
                    key={i}
                >
                    <Countdown title={countdown.title} end={countdown.date} />
                </div>
            );
        }),
    ];

    return (
        <div className={classes.rootContainer}>
            {notifications.map((createNotification, i) => createNotification(i, notifications.length))}
        </div>
    );
};

const getStyles = (expanded, i, numOfNotifications) => {
    if (expanded) {
        return {
            marginTop: "1%",
            width: "100%",
        };
    }

    return {
        top: `${i * 10}px`,
        width: `${100 - i * 5}%`,
        opacity: (100 - i * 5) / 100,
        zIndex: numOfNotifications - i,
        position: expanded ? null : "absolute",
    };
};

// unused until i decide to group notifications separately
const groupTypes = (...notifications) => {
    return (classes, id) => (
        <div
            className={classes.typeContainer}
            key={id}
        >
            {notifications.map((notification, i) => (
                <div
                    className={classes.notification}
                    key={i}
                >
                    {notification}
                </div>
            ))}
        </div>
    );
};

export default Notifications;