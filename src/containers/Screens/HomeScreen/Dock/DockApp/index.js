import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import {
    APP_LEVEL_GAPS,
    APP_SIDE_GAPS,
} from "../../../../../configs/constants";
import { states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        borderRadius: "25%",
        margin: `${APP_LEVEL_GAPS}% ${APP_SIDE_GAPS}%`,

        "&:hover": {
            cursor: "pointer",
        },
        "&:active": {
            opacity: 0.7,
        },
    },
});

const DockApp = ({ appSize, source, handler }) => {
    const classes = useStyles();

    return (
        <img
            className={classes.rootContainer}
            src={source}
            style={{
                border: source ? null : "1px dotted white",
                height: appSize,
                width: appSize,
                minHeight: appSize,
                minWidth: appSize,
            }}
            onClick={handler}
            alt=""
        />
    );
};

export default connect(states)(DockApp);
