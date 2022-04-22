import { makeStyles } from '@material-ui/styles';
import HeartAnimation from './components/HeartAnimation';
import Phone from './components/Phone';

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',

        position: 'relative',
    },
});

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <Phone />
            <HeartAnimation />
        </div>
    );
}

export default App;
