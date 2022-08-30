import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    rootContainer: {
        height: '25%',
        minHeight: '25%',
        backgroundColor: 'white',
        borderRadius: '50%',
        marginLeft: 3,
        marginRight: 3,
    },
});

const PasswordMask = () => {
    const classes = useStyles();
    const [width, setWidth] = useState();

    return (
        <div className={classes.rootContainer}
            ref={e => e && setWidth(e.clientHeight)}
            style={{
                width,
                minWidth: width
            }}
        />
    );
};

export default PasswordMask;