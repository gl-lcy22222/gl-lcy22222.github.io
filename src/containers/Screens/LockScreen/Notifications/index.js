import { makeStyles } from "@material-ui/styles";
import Countdown from "./Countdown";

const useStyles = makeStyles({
    rootContainer: {
        flex: '1',
        marginBottom: '10%',
        marginTop: '5%',
        overflow: 'auto',
        width: '90%',
    }
});

const Notifications = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <Countdown/>
        </div>
    );
};

export default Notifications;