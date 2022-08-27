import { makeStyles } from "@material-ui/styles";
import {
    connect
} from 'react-redux';
// import {
//     updateScreen,
// } from '../redux/actions';
// import {
//     BLACK_SCREEN,
//     LOCK_SCREEN,
//     HOME_SCREEN,
//     LOCKED_SCREEN,
//     UPLOAD_SCREEN,
// } from '../redux/constants';

// import BlackScreen from './Screens/BlackScreen';
// import LockScreen from './Screens/LockScreen';
// import HomeScreen from './Screens/HomeScreen';
// import LockedScreen from "./Screens/LockedScreen";
// import UploadScreen from "./Screens/UploadScreen";

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        transition: '1s', //DELETE?

        backgroundColor: 'red',
        position: 'relative',

        // "& > :nth-child(2)": {
        //     borderRadius: 90,
        //     overflow: 'hidden'
        // }
    },
});

const Screen = ({
    screen,
}) => {
    const classes = useStyles();
    const screenMapping = {
        // [BLACK_SCREEN]: <BlackScreen />,
        // [LOCKED_SCREEN]: <LockedScreen />,
        // [LOCK_SCREEN]: <LockScreen />,
        // [HOME_SCREEN]: <HomeScreen />,
        // [UPLOAD_SCREEN]: <UploadScreen />,
    };

    return (
        <div className={classes.rootContainer}>
            {screenMapping[screen]}
        </div>
    );
};

const mapStateToProps = ({
    screen,
}) => {

    return {
        screen
    };
};

const mapDispatchToProps = {
    // updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);