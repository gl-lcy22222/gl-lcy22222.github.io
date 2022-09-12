import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    rootContainer: {
        backgroundColor: 'red',
        height: 300,
        width: 300,

        position: 'absolute',
    },
});

const BackgroundAnimations = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>

        </div>
    )
};

export default BackgroundAnimations;