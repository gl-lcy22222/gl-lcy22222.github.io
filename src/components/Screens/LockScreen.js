import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { connect } from "react-redux";
import {
    updatePasscodeEntry,
    updateScreen,
    playAudio,
} from '../../redux/actions';
import {
    PASSCODE,
    HOME_SCREEN,
    TAPPING_SOUND,
} from '../../redux/constants';
import {
    sound
} from '../../data';
import LockIcon from "../LockIcon";
import backgroundPic from '../../picSrc/background.jpg';

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
    },
    text: {
        color: 'white',
        fontSize: 16,
        marginBottom: '4%',
    },
    passCodeContainer: {
        width: '100%',
        height: '5%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBoxContainer: {
        height: '100%',
        width: '40%',
        border: 'white 1px solid',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
    },
    inputConfirm: {
        color: 'white',
        position: 'absolute',
        marginLeft: '55%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    passwordMask: {
        height: '25%',
        minHeight: '25%',
        backgroundColor: 'white',
        borderRadius: '50%',
        marginLeft: 3,
        marginRight: 3,
    },
    numPadContainer: {
        width: '80%',
        height: '60%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numPadButton: {
        width: '25%',
        margin: '3%',
        border: '1px solid white',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '&:active': {
            backgroundColor: '#8f8f8f',
        }
    },
    deleteButtonContainer: {
        width: '65%',
        height: '5%',
        display: 'flex',
        alignItems: 'center',
    },
    deleteButton: {
        marginLeft: 'auto',
        fontSize: 14,
        color: 'white',
        cursor: 'pointer',
    }
});

const LockScreen = ({
    passcodeEntry,
    volume,
    updatePasscodeEntry,
    updateScreen,
    playAudio,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <LockIcon/>
            <Text/>
            <InputBox
                passcodeEntry={passcodeEntry}
                updatePasscodeEntry={updatePasscodeEntry}
                updateScreen={updateScreen}
            />
            <NumPad
                passcodeEntry={passcodeEntry}
                volume={volume}
                playAudio={playAudio}
                updatePasscodeEntry={updatePasscodeEntry}
            />
            <DeleteButton
                passcodeEntry={passcodeEntry}
                volume={volume}
                updatePasscodeEntry={updatePasscodeEntry}
            />
        </div>
    );
};

const Text = () => {
    const classes = useStyles();

    return (
        <div className={classes.text}>
            Enter Passcode
        </div>
    );
};

const InputBox = ({
    passcodeEntry,
    updatePasscodeEntry,
    updateScreen,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.passCodeContainer}>
            <div className={classes.inputBoxContainer}>
                {passcodeEntry.split('').map((char, i) => (
                    <PasswordMask
                        key={i}
                    />
                ))}
            </div>
            {passcodeEntry && (
                <ConfirmButton
                    passcodeEntry={passcodeEntry}
                    updatePasscodeEntry={updatePasscodeEntry}
                    updateScreen={updateScreen}
                />
            )}
        </div>
    );
};

const PasswordMask = () => {
    const classes = useStyles();
    const [width, setWidth] = useState();

    return (
        <div className={classes.passwordMask}
            ref={e => e && setWidth(e.clientHeight)}
            style={{
                width,
                minWidth: width
            }}
        />
    );
};

const ConfirmButton = ({
    passcodeEntry,
    updatePasscodeEntry,
    updateScreen,
}) => {
    const classes = useStyles();

    const handleConfirm = () => {
        if (passcodeEntry === PASSCODE) {
            updateScreen(HOME_SCREEN);
        }

        console.log("Passcode is 22222");
        updatePasscodeEntry('');
    };

    return (
        <div className={classes.inputConfirm}
            onClick={handleConfirm}
        >
            OK
        </div>
    );
};

const NumPad = ({
    passcodeEntry,
    volume,
    updatePasscodeEntry,
    playAudio,
}) => {
    const classes = useStyles();

    const numPadMapping = {
        1: '',
        2: 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ',
    };

    return (
        <div className={classes.numPadContainer}>
            {Object.keys(numPadMapping).map(key => {
                return (
                    <NumPadButton
                        key={key}
                        number={key}
                        alpha={numPadMapping[key]}
                        passcodeEntry={passcodeEntry}
                        volume={volume}
                        playAudio={playAudio}
                        updatePasscodeEntry={updatePasscodeEntry}
                    />
                );
            })}
            <NumPadButton
                number={0}
                passcodeEntry={passcodeEntry}
                volume={volume}
                playAudio={playAudio}
                updatePasscodeEntry={updatePasscodeEntry}
            />
        </div>
    );
};

const NumPadButton = ({
    number,
    alpha,
    passcodeEntry,
    volume,
    updatePasscodeEntry,
    playAudio,
}) => {
    const classes = useStyles();
    const [height, setHeight] = useState();
    
    return (
        <div className={classes.numPadButton}
            ref={e => e && setHeight(e.clientWidth)}
            style={{height}}
            onClick={() => {
                updatePasscodeEntry(passcodeEntry + number);
                playAudio(sound[TAPPING_SOUND]);
            }}
        >
            <div style={{
                fontSize: 30
            }}>
                {number}
            </div>
            <div style={{
                fontSize: 10
            }}>
                {alpha}
            </div>
        </div>
    );
};

const DeleteButton = ({
    passcodeEntry,
    updatePasscodeEntry,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.deleteButtonContainer}>
            <div className={classes.deleteButton}
                onClick={() => updatePasscodeEntry(passcodeEntry.slice(0, -1))}
            >
                DELETE
            </div>
        </div>
    );
};

const mapStateToProps = ({
    passcodeEntry,
    volume,
}) => {

    return {
        passcodeEntry,
        volume,
    };
};

const mapDispatchToProps = {
    updatePasscodeEntry,
    updateScreen,
    playAudio,
};

export default connect(mapStateToProps, mapDispatchToProps)(LockScreen);