import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatches, states } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        color: "white",
    },
});

const UploadButton = ({
    appName,
    description,
    currentUploadPage,
    setCurrentUploadPage,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <Button
                className={classes.button}
                variant="contained"
                style={{
                    backgroundColor: "#228ae6",
                    visibility: currentUploadPage === 2 ? "hidden" : "visible",
                }}
                onClick={() =>
                    handleOnClick(
                        appName,
                        description,
                        currentUploadPage,
                        setCurrentUploadPage
                    )
                }
            >
                Upload
            </Button>
        </div>
    );
};

const handleOnClick = (
    appName,
    description,
    currentUploadPage,
    setCurrentUploadPage
) => {
    if (currentUploadPage < 1) {
        setCurrentUploadPage(currentUploadPage + 1);
    } else if (appName && description) {
        setCurrentUploadPage(currentUploadPage + 1);
    }
};

export default connect(states, dispatches)(UploadButton);
