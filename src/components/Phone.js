import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import SideButton from './SideButton';
import Screen from './Screen';
import { updateScreen } from '../redux/actions';
import { BLACK_SCREEN, LOCKED_SCREEN } from '../redux/constants';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    rootContainer: {
        height: '90%',
        backgroundColor: '#c9c9c9',
        borderRadius: '100px',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    innerContainer: {
        height: '99.2%',
        borderRadius: '100px',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    const [outerContainerWidth, setOuterContainerWidth] = useState(0);
    const [innerContainerWidth, setInnerContainerWidth] = useState(0);

    return (
        <div className={classes.rootContainer}
            style={{
                width: outerContainerWidth
            }}
            ref={e => e && setOuterContainerWidth(e.clientHeight * 9 / 16)}
        >
            <div className={classes.innerContainer}
                style={{
                    width: innerContainerWidth
                }}
                ref={e => e && setInnerContainerWidth(e.clientHeight * 9 / 16)}
            >
                {/* Sound SideButton */}
                <SideButton
                    side={"left"}
                    top={"20%"}
                />
                {/* Up Volume SideButton */}
                <SideButton
                    side={"left"}
                    top={"30%"}
                    height={"7%"}
                />
                {/* Down Volume SideButton */}
                <SideButton
                    side={"left"}
                    top={"39%"}
                    height={"7%"}
                />
                {/* Power SideButton */}
                <SideButton
                    side={"right"}
                    top={"25%"}
                    height={"7%"}
                    action={() => updateScreen(screen === BLACK_SCREEN ? LOCKED_SCREEN : BLACK_SCREEN)}
                />
                <Screen/>
            </div>
        </div>
    );
};

const mapStateToProps = ({
    screen
}) => {
    return {
        screen,
    };
};

const mapDispatchToProps = {
    updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);