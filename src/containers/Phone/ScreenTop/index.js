import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { zIndex } from '../../../configs';
import { percent } from '../../../helpers';

const useStyles = makeStyles({
    rootContainer: {
        height: '4%',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: zIndex.phoneScreenTop,
    },
    strip: {
        borderRadius: '0px 0px 23px 23px',
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'black',
    },
    leftCamera: {
        borderRadius: '50%',
        boxShadow: 'inset 0px 0px 4px 2px rgba(15,70,144,1)',
    },
    rightCamera: {
        borderRadius: '50%',
        boxShadow: 'inset 0px 0px 4px 2px #292929',
    },
    speaker: {
        height: '20%',
        width: '30%',
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.46), rgba(20, 20, 20, .4))',
        position: 'relative',
        borderRadius: '20px',
    },
    cricketText: {
        color: 'white',
        position: 'absolute',
        right: '105%',
    },
    batteryContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '105%',
        height: '30%',
        width: '10%',
    },
    batteryBody: {
        backgroundColor: 'white',
        height: '100%',
        width: '80%',
    },
    batterTip: {
        backgroundColor: 'white',
        height: '50%',
        width: '20%',
    },
});

const ScreenTop = () => {
    const classes = useStyles();

    const [cameraSize, setCameraSize] = useState(0);

    return (
        <div className={classes.rootContainer}>
            <div className={classes.strip}
                ref={e => e && setCameraSize(e.clientHeight * percent(50))}
            >
                <div className={classes.cricketText}
                    style={{
                        fontSize: calcFontSize(cameraSize)
                    }}
                >
                    Cricket
                </div>
                <div className={classes.leftCamera}
                    style={{
                        height: cameraSize,
                        width: cameraSize
                    }}
                />
                <div className={classes.speaker}/>
                <div className={classes.rightCamera}
                    style={{
                        height: cameraSize,
                        width: cameraSize
                    }}
                />
                <div className={classes.batteryContainer}>
                    <div className={classes.batteryBody}/>
                    <div className={classes.batterTip}/>
                </div>
            </div>
        </div>
    );
};

const calcFontSize = cameraSize => cameraSize - 1;

// const Strip = ({
//     screen
// }) => {
//     const classes = useStyles();

//     return (
//         <div className={classes.strip}>
//             {screen !== BLACK_SCREEN && <CricketSymbol/>}

//             <LeftCamera/>
//             <Speaker/>
//             <RightCamera/>

//             {screen !== BLACK_SCREEN && <BatteryLife/>}
//         </div>
//     );
// };


// const CricketSymbol = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.cricketSymbol}>
//             Cricket
//         </div>
//     );
// };

// const LeftCamera = () => {
//     const classes = useStyles();

//     return (
//         <div className={multipleClasses(classes.leftCamera, classes.camera)}/>
//     );
// };


// const RightCamera = () => {
//     const classes = useStyles();

//     return (
//         <div className={multipleClasses(classes.rightCamera, classes.camera)}/>
//     );
// };

// const Speaker = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.speaker}>

//         </div>
//     );
// };

// const BatteryLife = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.batteryContainer}>
//             <div className={classes.batteryPercentageContainer}/>
//             <div className={classes.batteryTip}/>
//         </div>
//     );
// };

export default ScreenTop;