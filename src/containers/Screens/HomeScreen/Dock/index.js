import { makeStyles } from "@material-ui/styles";
import DockApp from "./DockApp";

const useStyles = makeStyles({
    rootContainer: {
        width: "90%",
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: "5%",

        // transition: `all ${centeringTime}ms ease`,
    },
});

const Dock = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <DockApp />
            <DockApp />
            <DockApp />
            <DockApp />
        </div>
    );
};

export default Dock;
