import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import { states, dispatches } from "./redux/redux";
import {
    BLACK_SCREEN,
    // LOCK_SCREEN,
    // HOME_SCREEN,
    // LOCKED_SCREEN,
    // UPLOAD_SCREEN,
} from "../../configs/constants";

import BlackScreen from "../Screens/BlackScreen/BlackScreen";
// import LockScreen from './Screens/LockScreen';
// import HomeScreen from './Screens/HomeScreen';
// import LockedScreen from "./Screens/LockedScreen";
// import UploadScreen from "./Screens/UploadScreen";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        transition: "1s", //DELETE?

        position: "relative",
        zIndex: 1,

        // "& > :nth-child(2)": {
        //     borderRadius: 90,
        //     overflow: 'hidden'
        // }
    },
});

const screenMapping = {
    [BLACK_SCREEN]: <BlackScreen />,
    // [LOCKED_SCREEN]: <LockedScreen />,
    // [LOCK_SCREEN]: <LockScreen />,
    // [HOME_SCREEN]: <HomeScreen />,
    // [UPLOAD_SCREEN]: <UploadScreen />,
};

const Screen = ({ screen }) => {
    const classes = useStyles();

    return <div className={classes.rootContainer}>{screenMapping[screen]}</div>;
};

export default connect(states, dispatches)(Screen);
