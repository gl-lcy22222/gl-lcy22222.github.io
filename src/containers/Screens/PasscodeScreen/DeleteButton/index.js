import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { dispatches } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        width: "65%",
        height: "5%",
        display: "flex",
        alignItems: "center",
    },
    deleteButton: {
        marginLeft: "auto",
        fontSize: 14,
        color: "white",
        cursor: "pointer",
    },
});

const DeleteButton = ({ deletePasscodeEntry }) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <div
                className={classes.deleteButton}
                onClick={() => deletePasscodeEntry()}
            >
                DELETE
            </div>
        </div>
    );
};

export default connect(null, dispatches)(DeleteButton);
