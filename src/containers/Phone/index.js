import { makeStyles } from '@material-ui/styles';
import { percent, playAudio } from '../../helpers';
import SideButton from './SideButton';
import Screen from '../Screen';
import { height, heightWidthRatio } from './configs';
import ScreenTop from './ScreenTop';
import { zIndex } from '../../configs';
import { BLACK_SCREEN, LOCK_SCREEN, LOCKING_SOUND } from '../../configs/constants';
import { connect } from 'react-redux';
import { dispatches, states } from '../Screen/redux';

const useStyles = makeStyles({
    rootContainer: {
        height: `${90}%`,
        backgroundColor: '#c9c9c9',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: zIndex.phone
    },
    innerContainer: {
        height: '99%',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenContainer: {
        height: '98%',
        overflow: 'hidden',
        position: 'relative',
    },

    strip: {
        backgroundColor: 'black',
        borderRadius: '0px 0px 23px 23px',
        height: '100%',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
    },
    topContent: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '4%',
        fontSize: 14,
        color: 'white'
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
        fontSize: 12
    },
    batteryContainer: {
        height: '30%',
        width: '12%',
        position: 'absolute',
        right: '-20%',
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

const Phone = ({
    screen,
    updateScreen,
}) => {
    const classes = useStyles();

    const containerWidth = window.innerHeight * percent(height) / heightWidthRatio;
    const innerContainerWidth = containerWidth * percent(99);
    const screenContainerWidth = innerContainerWidth * percent(96);

    const outerContainerBorderRadius = containerWidth * percent(20)
    const innerContainerBorderRadius = innerContainerWidth * percent(20)
    const screenContainerBorderRadius = screenContainerWidth * percent(20);

    const buttonWidth = containerWidth * percent(1.3);
    const buttonRatio = 9;
    const buttonHeight = buttonWidth * buttonRatio;

    const soundButtonRatio = 6;
    const soundButtonHeight = buttonWidth * soundButtonRatio;

    return (
        <div className={classes.rootContainer}
            style={{
                width: containerWidth,
                borderRadius: outerContainerBorderRadius
            }}
        >
            <div className={classes.innerContainer}
                style={{
                    width: innerContainerWidth,
                    borderRadius: innerContainerBorderRadius
                }}
            >
                <div className={classes.screenContainer}
                    style={{
                        width: screenContainerWidth,
                        borderRadius: screenContainerBorderRadius
                    }}
                >
                    <ScreenTop/>
                    <Screen />
                </div>

                {/* Sound SideButton */}
                <SideButton
                    side={"left"}
                    top={"17%"}
                    height={soundButtonHeight}
                    width={buttonWidth}
                    action={() => {
                        // updateSoundStatus(soundStatus === SOUND_ON ? SOUND_OFF : SOUND_ON);
                    }}
                />
                {/* Up Volume SideButton */}
                <SideButton
                    side={"left"}
                    top={"24%"}
                    height={buttonHeight}
                    width={buttonWidth}
                    // action={() => updateVolume(VOLUME_UP)}
                />
                {/* Down Volume SideButton */}
                <SideButton
                    side={"left"}
                    top={"31%"}
                    height={buttonHeight}
                    width={buttonWidth}
                    // action={() => updateVolume(VOLUME_DOWN)}
                />
                {/* Power SideButton */}
                <SideButton
                    side={"right"}
                    top={"20%"}
                    height={buttonHeight}
                    width={buttonWidth}
                    action={() => {
                        if (screen === BLACK_SCREEN) {
                            updateScreen(LOCK_SCREEN);
                        }
                        else {
                            updateScreen(BLACK_SCREEN);
                            playAudio(LOCKING_SOUND);
                        }
                    }}
                />

            </div>
        </div>
    );
};

export default connect(states, dispatches)(Phone);