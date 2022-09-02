import { makeStyles } from "@material-ui/styles";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        backgroundImage: `url(/images/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // transition: `all ${centeringTime}ms ease`,
    },
});

const HomeScreen = ({ apps }) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <Apps />
            <PageSelection />
            <Dock />
        </div>
    );
};

export default HomeScreen;
