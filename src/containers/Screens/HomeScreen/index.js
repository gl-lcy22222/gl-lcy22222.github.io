import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { backgroundImageSource } from "../../../configs/constants";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";
import { dispatches, states } from "./redux";
import HeartAnimation from '../../Heart Animation';

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

const HomeScreen = ({
    activeApp,
    setActiveApp,
}) => {
    const classes = useStyles();
    
    const isActive = activeApp !== null;

    return (
        <div
            className={classes.rootContainer}
            onClick={() => isActive && setActiveApp(null)}
        >
            <Apps />
            <PageSelection />
            <Dock />
        </div>
    );
};

export default connect(states, dispatches)(HomeScreen);
