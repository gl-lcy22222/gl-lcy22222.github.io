import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    text: {
        color: 'white',
        fontSize: 16,
        marginTop: '5%',
    },
});

const Text = () => {
    const classes = useStyles();

    return (
        <div className={classes.text}>
            Enter Passcode
        </div>
    );
};

export default Text;