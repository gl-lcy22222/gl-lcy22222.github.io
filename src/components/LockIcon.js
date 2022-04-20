import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    lockContainer: {
        height: '15%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    lockBody: {
        width: '5%',
        backgroundColor: 'white',
        borderRadius: '10%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%',
    },
    lockTop: {
        width: '80%',
        height: '70%',
        position: 'absolute',
        top: '-69%',
        margin: 'auto',
        borderTopRightRadius: '50%',
        borderTopLeftRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lockTopInside: {
        height: '80%',
        width: '70%',
        backgroundColor: 'transparent',

        border: '3px solid white',

        marginTop: 'auto',
        borderTopRightRadius: '50%',
        borderTopLeftRadius: '50%',
    },
});

const LockIcon = () => {
    const classes = useStyles();
    const [height, setHeight] = useState();

    return (
        <div className={classes.lockContainer}>
            <div className={classes.lockBody}
                style={{
                    height,
                }}
                ref={e => e && setHeight(e.clientWidth)}
            >
                <div className={classes.lockTop}
                    style={{
                        transition: '0.6s'
                    }}
                >
                    <div className={classes.lockTopInside}/>
                </div>
            </div>
        </div>
    );
};

export default LockIcon;