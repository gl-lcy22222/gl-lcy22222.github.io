import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import backgroundPic from '../../picSrc/SleepyBeauty.jpg';
import apps from '../../apps';
import { CSSTransition } from "react-transition-group";
import Transition from "react-transition-group/cjs/Transition";
import { TransitionGroup } from "react-transition-group";

const activeTime = 3000;
const transitionTime = 2000;

const useStyles = makeStyles({
    '@keyframes fade': {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0 }
    },
    rootContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#4eaccc'
    },
    appContentContainer: {
        paddingTop: '15%',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: '80%',
        width: '90%',
        display: 'inline-flex',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    appContainer: {
        width: '15%',
        margin: '1% 4%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    appImgContainer: {
        width: '100%',
        position: 'relative',
    },
    app: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        borderRadius: '25%',
        position: 'absolute',
        transition: `opacity ${transitionTime}ms ease-in-out`,

        '&:active': {
            opacity: 0.7
        }
    },
    appName: {
        marginTop: 5,
        fontSize: 14,
        maxHeight: 17,
        overflow: 'hidden',
    },

    // 'appTransition-enter': {
    //     opacity: 0,
    // },
    // 'appTransition-enter-active': {
    //     opacity: 1,
    //     transition: 'opacity 2000ms',
    // },
    // 'appTransition-exit': {
    //     opacity: 1,
    // },
    // 'appTransition-exit-active': {
    //     opacity: 0,
    //     transition: 'opacity 2000ms',
    // },
    
});

const HomeScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <div className={classes.appContentContainer}>
                {apps.map((app, i) => (
                    <App
                        key={i}
                        appName={app.name}
                        collection={app.collection}
                    />
                ))}
            </div>
        </div>
    );
};

const App = ({
    appName,
    collection,
}) => {
    const classes = useStyles();
    const [height, setHeight] = useState();

    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState(true);


    useEffect(() => {
        let activeTimer;
        let transitionTimer;

        // transitionTimer = setTimeout(() => {
        //     const index = (current + 1) % collection.length;
        //     setCurrent(index);
        // }, transitionTime);

        setInterval(() => setActive(!active), activeTime);

        return () => {
            clearTimeout(transitionTimer);
            clearTimeout(activeTimer);
        }
    }, [active]);

    console.log(active, current)

    useEffect(() => {
        const timer = setTimeout(() => setCurrent((current + 1) % collection.length), transitionTime);

        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className={classes.appContainer}>
            <div className={classes.appImgContainer}
                ref={e => e && setHeight(e.clientWidth)}
                style={{ height }}
            >
                <img className={classes.app}
                    src={collection[current]}
                    style={{
                        opacity: current % 2 === 0 ? 1 : 0
                    }}
                />
                {/* <img className={classes.app}
                    src={collection[current]}
                    style={{
                        opacity: current % 2 === 0 ? 0 : 1
                    }}
                /> */}
            </div>
            <div className={classes.appName}>
                {appName}
            </div>
        </div>
    );
};

const mapStateToProps = ({

}) => {

    return {

    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);