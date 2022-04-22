import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";

import {
    apps
} from '../../data';

import backgroundPic from '../../picSrc/background.jpg';
import { ESCAPE_KEY } from "../../redux/constants";

const activeTime = 3000;
const transitionTime = 2000;
const centeringTime = 1500;

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        flex: 1,
        
        position: 'relative'
    },
    appSectionContainer: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
    },
    appContentContainer: {
        paddingTop: '15%',
        width: '90%',
        minWidth: '100%',
        transition: `all 750ms ease`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
        
    },
    appContainer: {
        width: '14%',
        margin: '1% 4%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',

        '&:hover': {
            cursor: 'pointer'
        }
        
    },
    appImgContainer: {
        width: '100%',

        '&:active': {
            opacity: 0.7
        }
    },
    app: {
        width: '100%',
        height: '100%',
        borderRadius: '25%',
        transition: `opacity ${transitionTime}ms ease-in-out`,

    },
    appName: {
        marginTop: 5,
        fontSize: 14,
        height: 35,
        overflow: 'hidden',
        transition: `opacity ${centeringTime}ms ease-in-out`,
        textAlign: 'center',
    },
    pageSectionDotsContainer: {
        height: '5%',
        width: '100%',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: `opacity ${centeringTime}ms ease-in-out`,

    },
    pageSectionDots: {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        backgroundColor: 'white',
        margin: '0 1%',

        '&:hover': {
            cursor: 'pointer',
        }
    },
    deckContainer: {
        maxHeight: '12%',
        height: '15%',
        width: '90%',
        marginBottom: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        transition: `all ${centeringTime}ms ease`,
    },
    deckAppContainer: {
        width: '15%',
        margin: '1% 4%',

        borderRadius: '25%',
        border: '1px dotted white',

        '&:hover': {
            cursor: 'pointer',
        },
        '&:active': {
            opacity: 0.7,
        }
    }
});

const HomeScreen = () => {
    const classes = useStyles();
    const [active, setActive] = useState(null);
    const [page, setPage] = useState(0);
    const [prevPage, setPrevPage] = useState(0);
    const [transitionX, setTransitionX] = useState(0);

    const homeScreenRef = useRef();
    const initialRender = useRef(true);

    const appSections = [];
    let currentSection = [];

    for (const app of apps) {
        if (currentSection.length < 20) {
            currentSection.push(app);
        }
        else {
            appSections.push(currentSection);
            currentSection = [];
        }
    }
    
    const fillerApp = {
        name: '',
        collection: [],
    };

    while (currentSection.length !== 4) {
        currentSection.push(fillerApp);
    }

    appSections.push(currentSection);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        }
        else {
            if (prevPage > page) setTransitionX(transitionX + homeScreenRef.current.clientWidth);
            else setTransitionX(transitionX - homeScreenRef.current.clientWidth);
        }
    }, [page]);

    return (
        <div className={classes.rootContainer}
            ref={homeScreenRef}
            style={{
                pointerEvents: active !== null ? 'none' : null,
            }}
        >
            <div className={classes.appSectionContainer}>
                {appSections.map((section, sectionNum) => (
                    <div className={classes.appContentContainer}
                        key={sectionNum}
                        style={{
                            transform:  `translate(${transitionX}px, 0px)`,
                        }}
                    >
                        {appSections[sectionNum].map((app, i) => (
                            <App
                                homeScreen={homeScreenRef}
                                key={i}
                                num={i}
                                appName={app.name}
                                collection={app.collection}
                                active={active}
                                setActive={setActive}
                            />
                        ))}
                    </div>

            ))}
            </div>
            <div className={classes.pageSectionDotsContainer}
                style={{
                    opacity: active !== null ? 0 : 1
                }}
            >
                {appSections.map((section, num) => (
                    <PageSectionDots
                        key={num}
                        active={page === num}
                        onClick={() => {
                            setPrevPage(page);
                            setPage(num);
                        }}
                    />
                ))}
            </div>
            <div className={classes.deckContainer}
                style={{
                    opacity: active !== null ? 0 : 1
                }}
            >
                <DeckApp />
                <DeckApp />
                <DeckApp />
                <DeckApp />
            </div>
        </div>
    );
};

const App = ({
    num,
    appName,
    active,
    collection,
    homeScreen,
    setActive,
}) => {
    const classes = useStyles();
    
    const [height, setHeight] = useState();
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(null);
    console.log(current);
    
    const app = useRef();
    const firstRender = useRef(true);
    const timers = useRef({});
    
    const filler = !collection.length;
    const style = app.current?.style;

    const isActive = () => active === num || active === null;

    const inactiveCleanup = () => {
        setTransitioning(null);
        app.current.style = null;

        for (const timer in timers.current) {
            clearTimeout(timers.current[timer]);
        }

        setActive(null);
    };

    useEffect(() => {
        let transitionTimer;

        if (firstRender.current) {
            firstRender.current = false;
        }
        else {
            if (transitioning === true) {
                transitionTimer = setTimeout(() => {
                    setTransitioning(false);
                    style.opacity = "0";
                }, activeTime);
            }
            else if (transitioning === false) {
                transitionTimer = setTimeout(() => {
                    if (current + 1 < collection.length) {
                        setCurrent(current + 1);
                        setTransitioning(true);
                        style.opacity = "1";
                    }
                    else {
                        setCurrent(0);
                        inactiveCleanup();
                    }
                }, transitionTime);
            }

            timers.current.transitionTimer = transitionTimer;
        }

        return () => clearTimeout(transitionTimer);
    }, [transitioning, current]);

    useEffect(() => {
        const handleEsc = e => e.key === ESCAPE_KEY && inactiveCleanup();

        if (active !== null) {
            window.addEventListener('keydown', handleEsc);
        }
        else {
            inactiveCleanup();   
        }

        return () => window.removeEventListener('keydown', handleEsc);

    }, [active]);

    return (
        <div className={classes.appContainer}
            style={{
                visibility: filler ? 'hidden' : 'visible',
            }}
        >
            <div className={classes.appImgContainer}
                ref={e => e && setHeight(e.clientWidth)}
                style={{ height }}
                onClick={() => {
                    if (filler) return;

                    if (isActive() && transitioning === null) {
                        const { clientWidth, clientHeight } = homeScreen.current;
                        const { offsetLeft, offsetTop } = app.current;

                        const halfX = clientWidth / 2;
                        const halfY = clientHeight / 2;

                        const negativeX = () => offsetLeft < halfX;
                        const negativeY = () => offsetTop > halfY;

                        const centeringAnimationLogic = (
                            appHeight = app.current.height,
                            appWidth = app.current.width
                        ) => {
                            const halfAppX = appWidth / 2;
                            const halfAppY = appHeight / 2;

                            const x = negativeX() ? halfX - offsetLeft - halfAppX : -(offsetLeft - halfX + halfAppX);
                            const y = negativeY() ? -(offsetTop - halfY + halfAppY) : halfY - offsetTop - halfAppY;

                            style.position = "absolute";
                            style.zIndex = "10";
                            style.transition = `all ${centeringTime}ms ease`;
                            style.transform = `translate(${x}px, ${y}px)`;
                            style.maxHeight = `${appHeight}px`;
                            style.maxWidth = `${appWidth}px`;
                        };

                        const expandingAnimationLogic = () => {
                            const maxHeight = clientHeight * 0.5;
                            const maxWidth = clientWidth * 0.8;

                            centeringAnimationLogic(maxHeight, maxWidth);
                        };

                        centeringAnimationLogic();
                        setActive(num);
                        setTransitioning(true);

                        const centeringTimer =  setTimeout(() => {
                            expandingAnimationLogic();
                        }, centeringTime);

                        timers.current.centeringTimer = centeringTimer;
                    }
                }}
            >
                <img ref={app}
                    className={classes.app}
                    src={collection[current]}
                    style={{
                        opacity: isActive() ? 1 : 0,
                    }}
                    alt={appName}
                    onChange={e => console.log(e)}
                />
            </div>
            <div className={classes.appName}
                style={{
                    opacity: (isActive() && transitioning === null) ? 1 : 0
                }}
            >
                {appName}
            </div>
        </div>
    );
};

const PageSectionDots = ({
    active,
    onClick,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.pageSectionDots}
            style={{
                opacity: active ? 1 : 0.3
            }}
            onClick={onClick}
        />
    );
};

const DeckApp = () => {
    const classes = useStyles();

    const [height, setHeight] = useState();


    return (
        <div className={classes.deckAppContainer}
            ref={e => e && setHeight(e.clientWidth)}
            style={{ height }}
        >
            
        </div>
    );
};

export default HomeScreen;