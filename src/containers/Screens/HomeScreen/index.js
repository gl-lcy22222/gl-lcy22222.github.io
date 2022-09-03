import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { connect } from "react-redux";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";
import { dispatches, states } from "./redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        backgroundImage: `url(/images/background.jpg)`,
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
    
    const [playground, setPlayground] = useState();

    const isActive = activeApp !== null;

    return (
        <div
            className={classes.rootContainer}
            ref={(ref) => ref && setPlayground(ref)}
            onClick={() => isActive && setActiveApp(null)}
        >
            <Apps playground={playground} />
            <PageSelection />
            <Dock />
        </div>
    );
};

export default connect(states, dispatches)(HomeScreen);
