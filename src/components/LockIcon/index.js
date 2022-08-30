import { makeStyles } from "@material-ui/styles";

const lockIconImageUrl = process.env.PUBLIC_URL + "/images/lockIcon.png";

const useStyles = makeStyles({
    lockContainer: {
        width: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: "10%",
    },
});

const LockIcon = () => {
    const classes = useStyles();

    return (
        <img
            className={classes.lockContainer}
            src={lockIconImageUrl}
            alt="lock icon"
        />
    );
};

export default LockIcon;
