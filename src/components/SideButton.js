import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    rootContainer: {
        width: 6,
        position: 'absolute',
        cursor: 'pointer',
    }
});

const Button = ({
    height = '5%',
    color = 'black',
    side,
    top,
    action,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            style={{
                height,
                backgroundColor: color,
                left: side === 'left' ? '-6px' : '100%',
                top
            }}
            onClick={action}
        >

        </div >
    )
};

export default Button;