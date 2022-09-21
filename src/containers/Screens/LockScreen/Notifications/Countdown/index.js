import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { padding, percent, second } from "../../../../../helpers";
import { states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        // height: '25%',
        // minHeight: '25%',
        width: '100%',
        backgroundColor: 'blue',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        opacity: 0.9
    },
    title: {
        height: '30%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '100%',
    },
    separator: {
        width: '2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerBlock: {
        height: '90%',
        width: '8%',
        margin: '0px 1%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    unitContainer: {
        height: '30%',
        width: '84%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    unit: {
        height: '100%',
        width: '21%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: ''
    }
});

const Countdown = ({
    playground,
    title,
    end,
}) => {
    const classes = useStyles();

    const [dayA, setDayA] = useState(0);
    const [dayB, setDayB] = useState(0);
    const [hourA, setHourA] = useState(0);
    const [hourB, setHourB] = useState(0);
    const [minuteA, setMinuteA] = useState(0);
    const [minuteB, setMinuteB] = useState(0);
    const [secondA, setSecondA] = useState(0);
    const [secondB, setSecondB] = useState(0);

    const borderRadius = playground.width ? playground.width * percent(3) : 0;
    const timerBlockBorderRadius = playground.width ? playground.width * percent(1) : 0;
    const height = playground.height ? playground.height * percent(15) : 0;

    useEffect(() => {
        const interval = setInterval(() => {
            const endDate = new Date(end);
            const now = new Date();

            let delta = Math.abs(endDate - now) / 1000;

            let days = Math.floor(delta / 86400);
            delta -= days * 86400;

            let hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            let minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            let seconds = delta % 60;

            days = padding(Math.floor(days), 2);
            hours = padding(Math.floor(hours), 2);
            minutes = padding(Math.floor(minutes), 2);
            seconds = padding(Math.floor(seconds), 2);

            setDayA(days[0]);
            setDayB(days[1]);
            setHourA(hours[0]);
            setHourB(hours[1]);
            setMinuteA(minutes[0]);
            setMinuteB(minutes[1]);
            setSecondA(seconds[0]);
            setSecondB(seconds[1]);


        }, second(1));

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.rootContainer}
            style={{
                borderRadius,
                height,
            }}
        >
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.timerContainer}>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {dayA}
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {dayB}
                </div>
                <div className={classes.separator}>
                    :
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {hourA}
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {hourB}
                </div>
                <div className={classes.separator}>
                    :
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {minuteA}
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {minuteB}
                </div>
                <div className={classes.separator}>
                    :
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {secondA}
                </div>
                <div className={classes.timerBlock}
                    style={{
                        borderRadius: timerBlockBorderRadius,
                    }}
                >
                    {secondB}
                </div>
            </div>
            <div className={classes.unitContainer}>
                <div className={classes.unit}>
                    Days
                </div>
                <div className={classes.unit}>
                    Hours
                </div>
                <div className={classes.unit}>
                    Minutes
                </div>
                <div className={classes.unit}>
                    Seconds
                </div>
            </div>
        </div>
    );
};

export default connect(states)(Countdown);