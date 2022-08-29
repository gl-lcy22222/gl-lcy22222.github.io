import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    rootContainer: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        height: '10%',
    },
});

const date = new Date();

const Time = () => {
    const classes = useStyles();

    const padding = min => min < 10 ? '0' + min : min;

    const getHour = () => {
        if (date.getHours() === 0) {
            return 12;
        }
        else if (date.getHours() > 12) {
            return date.getHours() - 12;
        }
        else {
            return date.getHours();
        }
    };

    return (
        <div className={classes.rootContainer}>
            {`${getHour()}:${padding(date.getMinutes())}`}
        </div>
    );
};

export default Time;