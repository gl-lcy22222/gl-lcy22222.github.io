import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { CENTERING_TIME } from "../../../../configs/constants";
import { states } from "../redux";
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
    },
});

const Dock = ({
    activeApp
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            style={{
                opacity: activeApp ? 0 : 1,
            }}
        >
            <DockApp />
            <DockApp />
            <DockApp />
            <DockApp />
        </div>
    );
};

export default connect(states)(Dock);
