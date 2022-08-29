import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { useEffect } from "react";

import HeartAnimation from "../Heart Animation";
import Phone from "../Phone";
import Screen from "../Screen";

import {
    states,
    dispatches,
} from './redux';

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c4c4c4",
        position: "relative",
    },
});

// const audio = new Audio(sounds[ERIC_CHOU]);
// audio.onended = () => audio.play();

const App = ({
    volume,
    isMobile,
    setIsMobile,
}) => {
    const classes = useStyles();

    useEffect(() => {
        setIsMobile();
    }, []);

    return (
        <div
            className={classes.rootContainer}
            onDrop={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            // onClick={playAudio}
        >
            <Screen/>
            {!isMobile && <HeartAnimation />}
        </div>
    );
};

export default connect(states, dispatches)(App);
