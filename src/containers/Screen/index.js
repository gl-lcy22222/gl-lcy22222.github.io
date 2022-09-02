import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import { states, dispatches } from "./redux";
import {
    BLACK_SCREEN,
    HOME_SCREEN,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
} from "../../configs/constants";

import BlackScreen from "../Screens/BlackScreen";
import LockScreen from "../Screens/LockScreen";
import PasscodeScreen from "../Screens/PasscodeScreen";
import HomeScreen from "../Screens/HomeScreen";
// import UploadScreen from "./Screens/UploadScreen";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        transition: "1s", //DELETE?

        position: "relative",
        // zIndex: 1, //DELETE?

    },
});

const screenMapping = {
    [BLACK_SCREEN]: <BlackScreen />,
    [LOCK_SCREEN]: <LockScreen />,
    [PASSCODE_SCREEN]: <PasscodeScreen />,
    [HOME_SCREEN]: <HomeScreen />,
    // [UPLOAD_SCREEN]: <UploadScreen />,
};

const Screen = ({ screen }) => {
    const classes = useStyles();

    return <div className={classes.rootContainer}>{screenMapping[screen]}</div>;
};

export default connect(states, dispatches)(Screen);
