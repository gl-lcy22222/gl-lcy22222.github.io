import { makeStyles } from "@material-ui/styles";

import backgroundPic from '../../../sources/background.jpg';
import LockIcon from "./LockIcon";
import Time from "./Time";
import TodaysDate from "./TodaysDate";

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
});

const LockedScreen = ({
    // updateScreen,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            // onClick={() => updateScreen(LOCK_SCREEN)}
        >
            <LockIcon/>
            <Time/>
            <TodaysDate/>
        </div>
    );
};

export default LockedScreen;