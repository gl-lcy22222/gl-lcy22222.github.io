import { makeStyles } from "@material-ui/styles";
import HashLoader from 'react-spinners/HashLoader';

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        minHeight: '100%',
        minWidth: '100%',
        transition: `all 750ms ease`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const UploadingPage = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.rootContainer}>
            <HashLoader
                size={150}
                loading
                color='white'
            />
        </div>
    );
};

export default UploadingPage;