import { makeStyles } from "@material-ui/styles";

const position = {
    left: 'right',
    right: 'left',
};

const useStyles = makeStyles({
    rootContainer: {
        width: 6,
        position: 'absolute',
        cursor: 'pointer',
    }
});

const SideButton = ({
    height,
    width,
    side,
    top,
    action,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            style={{
                height,
                width,
                backgroundColor: 'black',
                [position[side]]: '100%',
                top
            }}
            onClick={action}
        >

        </div >
    )
};

export default SideButton;