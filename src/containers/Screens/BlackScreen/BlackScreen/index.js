import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { LOCK_SCREEN } from "../../../../configs/constants";

import { dispatches } from "../redux/redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "black",

        "&:hover": {
            cursor: "pointer",
        },
    },
});

const BlackScreen = ({ updateScreen }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.rootContainer}
            onClick={() => updateScreen(LOCK_SCREEN)}
        />
    );
};

export default connect(null, dispatches)(BlackScreen);
