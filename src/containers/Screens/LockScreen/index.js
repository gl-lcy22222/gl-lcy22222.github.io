import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import LockIcon from "../../../components/LockIcon";
import Time from "./Time";
import TodaysDate from "./TodaysDate";

import { dispatches, states } from "./redux";

import { SWIPE } from "../../../configs/constants";
import Notifications from "./Notifications";
import { useRef, useState } from "react";
import { shuffle } from "../../../helpers";

const images = shuffle([
    "images/image1.JPG",
    "images/image2.JPG",
    "images/image3.JPEG",
    "images/image4.JPEG",
]);

const useStyles = makeStyles({
    rootContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",

        // TODO: move to zindex config
        zIndex: 1,
        
        position: 'absolute',
        transition: 'translate 1000ms ease', // TODO add the 1000 ms to constants
    },
});

const LockScreen = ({
    playground
}) => {
    const classes = useStyles();

    const [startPosition, setStartPosition] = useState();
    const [currentImage, setCurrentImage] = useState(0);
    const [touchingScreen, setTouchingScreen] = useState(false);    
    const [swiping, setSwiping] = useState(false);

    const screenRef = useRef();

    const swipeAction = () => {
        screenRef.current.style.translate = `0px -${playground.height}px`;
    };

    return (
        <div
            className={classes.rootContainer}
            ref={screenRef}

            onMouseDown={e => {
                setTouchingScreen(true);
                setStartPosition(e.clientY);
            }}
            onMouseMove={() => touchingScreen && setSwiping(true)}
            onMouseUp={e => {
                if (!swiping) {
                    setCurrentImage((currentImage + 1) % images.length)
                }
                else {
                    setSwiping(false);
                    swipe(e.clientY, startPosition, swipeAction, SWIPE.NEGATIVE);
                }
            }}

            onTouchStart={e => {
                setTouchingScreen(true);
                setStartPosition(e.changedTouches[0].screenY);
            }}
            onTouchMove={() => touchingScreen && setSwiping(true)}
            onTouchEnd={e => {
                if (!swiping) {
                    setCurrentImage((currentImage + 1) % images.length)
                }
                else {
                    setSwiping(false);
                    swipe(e.changedTouches[0].screenY, startPosition, swipeAction, SWIPE.NEGATIVE);
                }
            }}
            
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            <LockIcon />
            <Time />
            <TodaysDate />
            <Notifications />
        </div>
    );
};

// TODO: move this to helpers
const swipe = (finalPosition, startPosition, action, direction) => {
    const difference = finalPosition - startPosition;

    if (direction) {
        if (direction === SWIPE.POSITIVE && difference > 0) {
            action(difference);
        }
        else if (direction === SWIPE.NEGATIVE && difference < 0) {
            action(-difference);
        }
    }
    else {
        action(difference);
    }
};

export default connect(states, dispatches)(LockScreen);
