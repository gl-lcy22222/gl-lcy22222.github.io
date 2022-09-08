import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { backgroundImageSource, HOME_SCREEN } from "../../../configs/constants";
import { fetchApps } from "../../../google/helpers";
import {
    createAlbum,
    getAlbumContents,
    shareAlbum,
    uploadMedia,
} from "../../../google/requests";
import { setApps } from "../HomeScreen/redux/actions";
import BackIcon from "./BackIcon";
import { UPLOADING_PAGE, UPLOAD_PAGE } from "./configs";
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

const UploadScreen = ({
    playground,
    currentUploadPage,
    appName,
    appId,
    description,
    medias,
    setApps,
    updateScreen,
    setCurrentUploadPage,
    clearUploadScreen,
}) => {
    const classes = useStyles();

    const pagesContainerRef = useRef();

    useEffect(() => {
        for (const child of pagesContainerRef.current.children) {
            child.style.translate = `-${
                playground.width * currentUploadPage
            }px`;
        }

        if (currentUploadPage === UPLOADING_PAGE) {
            if (appId) {
                uploadMedia(medias, appId, description)
                .then(() => {
                    fetchApps(false)
                        .then((apps) => setApps(apps))
                        .catch((err) => console.log(err, "fetchApps Error"));

                    clearUploadScreen();
                    updateScreen(HOME_SCREEN);
                })
                .catch((err) => {
                    console.log(err.response, "uploadMedia Error");
                    setCurrentUploadPage(UPLOAD_PAGE);
                });
            }
            else {
                createApp(appName, description, medias)
                    .then(({ data }) => {
                        // addApp({
                        //     name: appName,
                        //     description,
                        //     collection: data.mediaItems,
                        // });
                        clearUploadScreen();
                        updateScreen(HOME_SCREEN);
                    })
                    .catch((err) => {
                        console.log(err.response, "createApp Error");
                        setCurrentUploadPage(UPLOAD_PAGE);
                    });
            }
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

const createApp = async (appName, description, medias) => {
    const albumId = await createAlbum(appName)
        .then(({ data }) => {
            const { id } = data;
            return id;
        })
        .catch((err) => {
            console.log(err.response, "createAlbum Error");
        });

    await shareAlbum(albumId).catch((err) => {
        console.log(err.response, "shareAlbum Error");
    });

    await uploadMedia(medias, albumId, description).catch((err) => {
        console.log(err.response, "uploadMedia Error");
    });

    return getAlbumContents(albumId);
};

export default connect(states, dispatches)(UploadScreen);
