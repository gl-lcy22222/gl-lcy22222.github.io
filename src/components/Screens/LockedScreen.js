import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import {
    updateScreen,
} from '../../redux/actions';
import {
    LOCK_SCREEN,
} from '../../redux/constants';
import LockIcon from "../LockIcon";

import backgroundPic from '../../picSrc/background.jpg';

const date = new Date();

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
    },
    timeContainer: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        height: '10%',
    },
    todaysDateContainer: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
});

const LockedScreen = ({
    updateScreen,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            onClick={() => updateScreen(LOCK_SCREEN)}
        >
            <LockIcon/>
            <Time/>
            <TodaysDate/>
        </div>
    );
};

const Time = () => {
    const classes = useStyles();

    const padding = min => min < 10 ? '0' + min : min;

    const getHour = () => {
        if (date.getHours() === 0) {
            return 12;
        }
        else if (date.getHours() > 12) {
            return date.getHours() - 12;
        }
        else {
            return date.getHours();
        }
    };

    return (
        <div className={classes.timeContainer}>
            {`${getHour()}:${padding(date.getMinutes())}`}
        </div>
    );
};

const TodaysDate = () => {
    const classes = useStyles();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return (
        <div className={classes.todaysDateContainer}>
            {`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`}
        </div>
    );
};

const mapDispatchToProps = {
    updateScreen,
};

export default connect(null, mapDispatchToProps)(LockedScreen);