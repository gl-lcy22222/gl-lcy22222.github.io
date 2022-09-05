import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { backgroundImageSource, HOME_SCREEN } from "../../../configs/constants";
import BackIcon from "./BackIcon";
import InfoPage from "./InfoPage";
import { dispatches, states } from "./redux";
import UploadButton from "./UploadButton";
import UploadingPage from "./UploadingPage";
import UploadPage from "./UploadPage";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    pagesContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        flex: 1,
    },
});

const UploadScreen = ({ playground, currentUploadPage }) => {
    const classes = useStyles();

    const pagesContainerRef = useRef();

    useEffect(() => {
        for (const child of pagesContainerRef.current.children) {
            child.style.translate = `-${playground.width * currentUploadPage}px`;
        }
    }, [currentUploadPage, playground]);

    return (
        <div className={classes.rootContainer}>
            <BackIcon />
            <div className={classes.pagesContainer} ref={pagesContainerRef}>
                <UploadPage />
                <InfoPage />
                <UploadingPage />
            </div>
            <UploadButton />
        </div>
    );
};

export default connect(states, dispatches)(UploadScreen);
