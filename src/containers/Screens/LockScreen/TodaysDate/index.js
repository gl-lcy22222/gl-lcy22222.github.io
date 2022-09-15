import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    rootContainer: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        height: '5%',
    },
});

const date = new Date();

const TodaysDate = () => {
    const classes = useStyles();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return (
        <div className={classes.rootContainer}>
            {`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`}
        </div>
    );
};

export default TodaysDate;