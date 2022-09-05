import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatches, states } from "../redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        minHeight: "100%",
        minWidth: "100%",
        transition: `all 750ms ease`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mediaInfo: {
        width: "70%",
        color: "white",
        backgroundColor: "whitesmoke",
        borderRadius: "4px",
        marginTop: "10%",
    },
});

const InfoPage = ({
    appName,
    description,
    setAppName, setDescription }) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <TextField
                label="App Name"
                variant="outlined"
                className={classes.mediaInfo}
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                className={classes.mediaInfo}
                multiline
                minRows={4}
                maxRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
    );
};

export default connect(states, dispatches)(InfoPage);
