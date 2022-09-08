import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { useLayoutEffect } from "react";

import HeartAnimation from "../Heart Animation";
import Phone from "../Phone";
import Screen from "../Screen";

import {
    states,
    dispatches,
} from './redux';
import { fetchApps } from "../../google/helpers";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c4c4c4",
    },
});

// const audio = new Audio(sounds[ERIC_CHOU]);
// audio.onended = () => audio.play();

const App = ({
    volume,
    isMobile,
    setIsMobile,
    setApps,
}) => {
    const classes = useStyles();

    useLayoutEffect(() => {
        setIsMobile();
        fetchApps()
            .then((apps) => setApps(apps))
            .catch((err) => console.log(err, "fetchApps Error"));
    }, []);

    return (
        <div
            className={classes.rootContainer}
            onDrop={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            // onClick={playAudio}
        >
            {isMobile && <Screen/>}
            {!isMobile && <Phone/>}
            {!isMobile && <HeartAnimation/>}
        </div>
    );
};

export default connect(states, dispatches)(App);
