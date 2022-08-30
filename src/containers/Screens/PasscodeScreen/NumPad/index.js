import { makeStyles } from "@material-ui/styles";
import NumPadButton from "../NumPadButton";

const useStyles = makeStyles({
    rootContainer: {
        width: "80%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
    },
});

const NumPad = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            {Array(9)
                .fill()
                .map((key, index) => {
                    return <NumPadButton key={index} number={index + 1} />;
                })}
            <NumPadButton number={0} />
        </div>
    );
};

export default NumPad;
