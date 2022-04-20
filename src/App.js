import { makeStyles } from '@material-ui/styles';
import Phone from './components/Phone';

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
    },
});

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <Phone />
        </div>
    );
}

export default App;
