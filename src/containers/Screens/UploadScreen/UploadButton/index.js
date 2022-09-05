import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatches, states } from "../redux";
import {
    INFO_PAGE, UPLOADING_PAGE, UPLOAD_PAGE,
} from '../configs';

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
    medias,
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
                        medias,
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
    medias,
    setCurrentUploadPage
) => {
    if (currentUploadPage === UPLOAD_PAGE && medias.length) {
        setCurrentUploadPage(INFO_PAGE);
    } else if (appName && description) {
        setCurrentUploadPage(UPLOADING_PAGE);
    }
};

export default connect(states, dispatches)(UploadButton);
