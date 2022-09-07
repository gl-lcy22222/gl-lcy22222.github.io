import { makeStyles } from "@material-ui/styles";
import { TextField, MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import { connect } from "react-redux";
import { dispatches, states } from "../redux";
import { Autocomplete } from '@mui/material';
import { isString } from '../../../../helpers';
import { useState } from "react";

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
        maxWidth: "70%",
        color: "white",
        backgroundColor: "whitesmoke",
        borderRadius: "4px",
        marginTop: "10%",
    },
});

const InfoPage = ({
    apps,
    appName,
    description,
    setAppName,
    setDescription,
    setAppId,
}) => {
    const classes = useStyles();

    const [disabledDescription, setDisabledDescription] = useState(false);

    return (
        <div className={classes.rootContainer}>
            <Autocomplete
                className={classes.mediaInfo}
                disablePortal
                style={{
                    padding: "2% 2%",
                }}
                defaultValue=""
                options={apps.map((app) => app)}
                getOptionLabel={(app) => isString(app) ? app : app.name}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="App Name"
                        onSelect={(e) => {
                            const appName = e.target.value;

                            if (!appName) return;

                            setAppName(appName);
                            setDisabledDescription(false);
                            setDescription('');
                            setAppId();

                            const app = apps.find(app => app.name.toLowerCase() === appName.toLowerCase());

                            if (!app) return;

                            setAppId(app.id);
                            setDescription(app.description);
                            setDisabledDescription(true);
                        }}
                    />
                )}
                value={appName}
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
                disabled={disabledDescription}
            />
        </div>
    );
};

export default connect(states, dispatches)(InfoPage);
