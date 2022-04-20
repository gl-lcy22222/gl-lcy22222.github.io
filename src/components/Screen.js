import { makeStyles } from "@material-ui/styles";
import {
    connect
} from 'react-redux';
import {
    updateScreen,
} from '../redux/actions';
import {
    BLACK_SCREEN,
    LOCK_SCREEN,
    HOME_SCREEN,
    LOCKED_SCREEN,
} from '../redux/constants';

import ScreenTopContent from './ScreenTopContent';
import BlackScreen from './Screens/BlackScreen';
import LockScreen from './Screens/LockScreen';
import HomeScreen from './Screens/HomeScreen';
import LockedScreen from "./Screens/LockedScreen";

const useStyles = makeStyles({
    rootContainer: {
        height: '97%',
        width: '96%',
        transition: '1s', //DELETE?

        position: 'relative',

        "& > :nth-child(2)": {
            borderRadius: 90,
            overflow: 'hidden'
        }
    },
});

const Screen = ({
    screen,
}) => {
    const classes = useStyles();
    const screenContent = {
        [BLACK_SCREEN]: <BlackScreen />,
        [LOCKED_SCREEN]: <LockedScreen />,
        [LOCK_SCREEN]: <LockScreen />,
        [HOME_SCREEN]: <HomeScreen />,
    };

    return (
        <div className={classes.rootContainer}>
            <ScreenTopContent />
            {screenContent[screen]}
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
    updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);