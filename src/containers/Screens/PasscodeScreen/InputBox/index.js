import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import ConfirmButton from "../ConfirmButton";
import PasswordMask from "../PasswordMask";

import { states } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        width: "100%",
        height: "5%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
    },
    inputBoxContainer: {
        height: "100%",
        width: "40%",
        border: "white 1px solid",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
    },
});

const InputBox = ({ passcodeEntry }) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <div className={classes.inputBoxContainer}>
                {passcodeEntry.split("").map((char, i) => (
                    <PasswordMask key={i} />
                ))}
            </div>
            {passcodeEntry && <ConfirmButton />}
        </div>
    );
};

export default connect(states)(InputBox);
