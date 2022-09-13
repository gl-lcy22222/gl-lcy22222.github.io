import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { zIndex } from "../../../../configs";
import { appStoreImageSource, CENTERING_TIME, UPLOAD_SCREEN } from "../../../../configs/constants";
import { dispatches, states } from "../redux";
import DockApp from "./DockApp";

const useStyles = makeStyles({
    rootContainer: {
        width: "90%",
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: "5%",
        transition: `all ${CENTERING_TIME}ms ease`,
        zIndex: zIndex.dock
    },
});

const Dock = ({
    activeApp,
    updateScreen
}) => {
    const classes = useStyles();

    const isActive = activeApp !== null;

    return (
        <div className={classes.rootContainer}
            style={{
                opacity: isActive ? 0 : 1,
                pointerEvents: isActive ? 'none' : null,
            }}
        >
            <DockApp
                source={appStoreImageSource}
                handler={() => updateScreen(UPLOAD_SCREEN)}
            />
            <DockApp />
            <DockApp />
            <DockApp />
        </div>
    );
};

export default connect(states, dispatches)(Dock);
