import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import LockIcon from "../../../components/LockIcon";
import Time from "./Time";
import TodaysDate from "./TodaysDate";

import { dispatches } from "./redux";

import { backgroundImageSource, PASSCODE_SCREEN } from "../../../configs/constants";
import Notifications from "./Notifications";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
    },
});

const LockScreen = ({ updateScreen }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.rootContainer}
            onClick={() => updateScreen(PASSCODE_SCREEN)}
        >
            <LockIcon />
            <Time />
            <TodaysDate />
            <Notifications />
        </div>
    );
};

export default connect(null, dispatches)(LockScreen);
