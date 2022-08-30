import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import LockIcon from "./LockIcon";
import Time from "./Time";
import TodaysDate from "./TodaysDate";

import { dispatches } from "./redux";

import { BLACK_SCREEN } from "../../../configs/constants";

import backgroundPic from "../../../sources/background.jpg";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${backgroundPic})`,
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
            onClick={() => updateScreen(BLACK_SCREEN)}
        >
            <LockIcon />
            <Time />
            <TodaysDate />
        </div>
    );
};

export default connect(null, dispatches)(LockScreen);
