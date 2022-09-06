import { makeStyles } from "@material-ui/styles";
import { percent } from "../../helpers";
import Screen from "../Screen";
import { height, heightWidthRatio } from "./configs";

const useStyles = makeStyles({
    rootContainer: {
        height: `${height}%`,
        backgroundColor: 'red',
    },
});

const Phone = () => {
    const classes = useStyles();

    const width = window.innerHeight * percent(height) / heightWidthRatio;

    return (
        <div className={classes.rootContainer}
            style={{
                width,
            }}
        >
            <Screen/>
        </div>
    );
};

export default Phone;