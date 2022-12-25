import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import { states, dispatches } from "./redux";
import {
    BLACK_SCREEN,
    HOME_SCREEN,
    isChristmasTime,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
    UPLOAD_SCREEN,
} from "../../configs/constants";

import BlackScreen from "../Screens/BlackScreen";
import LockScreen from "../Screens/LockScreen";
import PasscodeScreen from "../Screens/PasscodeScreen";
import HomeScreen from "../Screens/HomeScreen";
import UploadScreen from "../Screens/UploadScreen";
import SnowfallAnimations from "../Screens/HomeScreen/SnowfallAnimations";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
    },
});

const screenMapping = {
    [BLACK_SCREEN]: <BlackScreen />,
    [LOCK_SCREEN]: <LockScreen />,
    [PASSCODE_SCREEN]: <PasscodeScreen />,
    [HOME_SCREEN]: <HomeScreen />,
    [UPLOAD_SCREEN]: <UploadScreen />,
};

const Screen = ({
    screen,
    setPlaygroundInfo,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            ref={ref => handleRef(ref, setPlaygroundInfo)}
        >
            {screenMapping[screen]}
            {isChristmasTime && <SnowfallAnimations/>}
        </div>
    );
};

const handleRef = (ref, setPlaygroundInfo) => {
    if (ref) {
        setPlaygroundInfo({
            width: ref.clientWidth,
            height: ref.clientHeight,
        })
    }
};

export default connect(states, dispatches)(Screen);
