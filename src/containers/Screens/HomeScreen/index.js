import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import Apps from "./Apps";
import Dock from "./Dock";
import PageSelection from "./PageSelection";

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

const HomeScreen = () => {
    const classes = useStyles();
    const [playground, setPlayground] = useState();

    return (
        <div
            className={classes.rootContainer}
            ref={(ref) => ref && setPlayground(ref)}
        >
            <Apps playground={playground} />
            <PageSelection />
            <Dock />
        </div>
    );
};

export default HomeScreen;
