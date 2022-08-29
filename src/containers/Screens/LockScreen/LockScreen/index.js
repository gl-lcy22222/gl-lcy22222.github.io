import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
// import {
//     updateScreen,
// } from '../../redux/actions';
// import {
//     LOCK_SCREEN,
// } from '../../redux/constants';
// import LockIcon from "../LockIcon";

import backgroundPic from '../../../../sources/background.jpg';
import LockIcon from "../LockIcon";
import Time from "../Time";
import TodaysDate from "../TodaysDate";

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


// const mapDispatchToProps = {
//     updateScreen,
// };

// export default connect(null, mapDispatchToProps)(LockedScreen);
export default LockedScreen;