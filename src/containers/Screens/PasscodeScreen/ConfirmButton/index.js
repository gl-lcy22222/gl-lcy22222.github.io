import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { BLACK_SCREEN, HOME_SCREEN, PASSCODE } from "../../../../configs/constants";
import { dispatches, states } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        color: 'white',
        position: 'absolute',
        marginLeft: '55%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
});

const ConfirmButton = ({
    passcodeEntry,
    clearPasscodeEntry,
    updateScreen,
}) => {
    const classes = useStyles();

    const handleConfirm = () => {
        if (passcodeEntry === PASSCODE) {
            updateScreen(BLACK_SCREEN);
        }

        console.log("Passcode is 22222");
        clearPasscodeEntry();
    };

    return (
        <div className={classes.rootContainer}
            onClick={handleConfirm}
        >
            OK
        </div>
    );
};

export default connect(states, dispatches)(ConfirmButton);