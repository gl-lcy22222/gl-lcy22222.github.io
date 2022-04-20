import { makeStyles } from '@material-ui/styles';
import {
    connect
} from 'react-redux';
import {
    multipleClasses
} from '../actions';
import { BLACK_SCREEN } from '../redux/constants';

const useStyles = makeStyles({
    strip: {
        backgroundColor: 'black',
        borderRadius: '0px 0px 23px 23px',
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',

        zIndex: 100,
    },
    topContent: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '4%',
        fontSize: 14,
        color: 'white',
        position: 'absolute',
    },
    speaker: {
        height: '20%',
        width: '30%',
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.46), rgba(20, 20, 20, .4))',
        position: 'relative',
        borderRadius: '20px',
    },
    camera: {
        height: 15,
        width: 15,
        borderRadius: '50%',
    },
    leftCamera: {
        boxShadow: 'inset 0px 0px 4px 2px rgba(15,70,144,1)',
    },
    rightCamera: {
        boxShadow: 'inset 0px 0px 4px 2px #292929',
    },
    cricketSymbol: {
        position: 'absolute',
        left: '-20%',
        fontSize: 12,
    },
    batteryContainer: {
        height: '30%',
        width: '10%',
        position: 'absolute',
        right: '-15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    batteryPercentageContainer: {
        backgroundColor: 'white',
        height: '100%',
        flexGrow: '1'
    },
    batteryTip: {
        backgroundColor: 'white',
        height: '50%',
        width: '10%',
    }
});


const ScreenTopContent = ({
    screen
}) => {
    const classes = useStyles();

    return (
        <div className={classes.topContent}>
            <Strip screen={screen}/>
        </div>
    );
};

const Strip = ({
    screen
}) => {
    const classes = useStyles();

    return (
        <div className={classes.strip}>
            {screen !== BLACK_SCREEN && <CricketSymbol/>}

            <LeftCamera/>
            <Speaker/>
            <RightCamera/>

            {screen !== BLACK_SCREEN && <BatteryLife/>}
        </div>
    );
};


const CricketSymbol = () => {
    const classes = useStyles();

    return (
        <div className={classes.cricketSymbol}>
            Cricket
        </div>
    );
};

const LeftCamera = () => {
    const classes = useStyles();

    return (
        <div className={multipleClasses(classes.leftCamera, classes.camera)}/>
    );
};


const RightCamera = () => {
    const classes = useStyles();

    return (
        <div className={multipleClasses(classes.rightCamera, classes.camera)}/>
    );
};

const Speaker = () => {
    const classes = useStyles();

    return (
        <div className={classes.speaker}>

        </div>
    );
};

const BatteryLife = () => {
    const classes = useStyles();

    return (
        <div className={classes.batteryContainer}>
            <div className={classes.batteryPercentageContainer}/>
            <div className={classes.batteryTip}/>
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

export default connect(mapStateToProps, null)(ScreenTopContent);