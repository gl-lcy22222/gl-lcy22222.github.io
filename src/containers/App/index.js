import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { useEffect } from "react";

import HeartAnimation from "../Heart Animation";
// import Phone from "../Phone";
import Screen from "../Screen";

import {
    states,
    dispatches,
} from './redux';
import { getAlbumContents, getAlbums } from "../../google/requests";

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

    useEffect(() => {
        setIsMobile();
        getAlbums()
            .then(({ data }) => data.albums)
            .then(async albums => {
                return await Promise.all(albums.map(async album => {
                    return await getAlbumContents(album.id)
                        .then(({ data }) => {
                            preloadMediaItems(data.mediaItems);
                            return {
                                name: album.title,
                                description: data.mediaItems[0].description,
                                collection: data.mediaItems,
                            };
                        })
                }));
            })
            .then((apps) => setApps(apps))
            .catch((err) => console.log(err, "getAlbums Error"));
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

const preloadMediaItems = mediaItems => mediaItems.forEach(item => new Image().src = item.baseUrl);

export default connect(states, dispatches)(App);
