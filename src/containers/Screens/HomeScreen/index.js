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
    playground,
    setActiveApp,
    setPlaygroundInfo,
}) => {
    const handleRef = ref => {
        if (ref && !playground.height) {
            setPlaygroundInfo({
                width: ref.clientWidth,
                height: ref.clientHeight,
            })
        }
    };

    const classes = useStyles();
    
    const isActive = activeApp !== null;

    return (
        <div
            className={classes.rootContainer}
            ref={handleRef}
            onClick={() => isActive && setActiveApp(null)}
        >
            <Apps />
            <PageSelection />
            <Dock />
        </div>
    );
};

export default connect(states, dispatches)(HomeScreen);
