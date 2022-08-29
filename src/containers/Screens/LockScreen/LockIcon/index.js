import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

import lockIcon from "../../../../sources/lockIcon.png";

const useStyles = makeStyles({
    lockContainer: {
        width: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: '10%',
    },
});

const LockIcon = () => {
    const classes = useStyles();

    return (
        <img className={classes.lockContainer} src={lockIcon} alt="lock icon" />
    );
};

export default LockIcon;
