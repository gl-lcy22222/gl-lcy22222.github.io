import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { backIconImageSource, HOME_SCREEN } from "../../../../configs/constants";
import { dispatches, states } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        marginTop: "10%",
        marginLeft: "5%",
        maxWidth: "10%",
        alignSelf: 'flex-start',
        "&:hover": {
            cursor: "pointer",
        },
    },
});

const BackIcon = ({
    currentUploadPage,
    setCurrentUploadPage,
    updateScreen,
}) => {
    const classes = useStyles();

    return (
        <img className={classes.rootContainer}
            style={{
                visibility: currentUploadPage < 2 ? 'visible' : 'hidden'
            }}
            src={backIconImageSource}
            alt="back icon"
            onClick={() => handleOnClick(currentUploadPage, setCurrentUploadPage, updateScreen)}
        />
    );
}

const handleOnClick = (currentUploadPage, setCurrentUploadPage, updateScreen) => {
    if (currentUploadPage === 0) {
        updateScreen(HOME_SCREEN);
    }
    else {
        setCurrentUploadPage(currentUploadPage - 1);
    }
};

export default connect(states, dispatches)(BackIcon);