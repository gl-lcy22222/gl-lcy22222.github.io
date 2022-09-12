import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { connect } from "react-redux";
import { TAPPING_SOUND } from "../../../../configs/constants";
import { playAudio } from "../../../../helpers";
import { dispatches } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
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
});

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

const NumPadButton = ({
    number,
    updatePasscodeEntry,
}) => {
    const classes = useStyles();
    const [height, setHeight] = useState();

    const alpha = numPadMapping[number];
    
    return (
        <div className={classes.rootContainer}
            ref={e => e && setHeight(e.clientWidth)}
            style={{height}}
            onClick={e => {
                e.preventDefault();
                updatePasscodeEntry(number);
                playAudio(TAPPING_SOUND);
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

export default connect(null, dispatches)(NumPadButton);