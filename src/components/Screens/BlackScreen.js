import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import {
    updateScreen
} from '../../redux/actions';
import {
    LOCKED_SCREEN
} from '../../redux/constants';

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        cursor: 'pointer'
    }
});

const BlackScreen = ({
    updateScreen
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}
            onClick={() => updateScreen(LOCKED_SCREEN)}
        />
    );
};

const mapDispatchToProps = {
    updateScreen,
};

export default connect(null, mapDispatchToProps)(BlackScreen);