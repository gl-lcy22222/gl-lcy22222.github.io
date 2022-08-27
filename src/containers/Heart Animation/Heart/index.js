import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        height: 55,
        width: 50,
        display: "inline-block",
        mask: "radial-gradient(circle at 60% 65%, red 64%, transparent 65%) top left, radial-gradient(circle at 40% 65%, red 64%, transparent 65%) top right, linear-gradient(to bottom left, red 43%,transparent 43%) bottom left , linear-gradient(to bottom right,red 43%,transparent 43%) bottom right",
        maskSize: "50% 50%",
        maskRepeat: "no-repeat",
    }
});

const Heart = ({
    canvas,
}) => {
    const classes = useStyles();
    const heart = useRef();
    const [x, setX] = useState();
    const [y, setY] = useState();

    const time = Math.floor(Math.random() * 20) + 4;
    const hexA = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    const hexB = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    useEffect(() => {
        const { clientHeight, clientWidth } = canvas.current;

        const startX = 50 + (Math.random() * (clientWidth - 50)) + 1;
        const startY = (55 + clientHeight) + 1

        setX(startX);
        setY(startY);

        setTimeout(() => {
            const style = heart.current.style;
    
            style.visibility = 'visible';
            style.transform = `translate(0, -${startY}px)`;
            style.opacity = 0;
        }, 1500);
    }, [canvas]);

    return (
        <div className={classes.container}
            style={{
                transition: `all ease ${time}s`,
                top: y,
                left: x,
                visibility: 'hidden',
                background: `linear-gradient(${hexA}, ${hexB})`,
            }}
            ref={heart}
        />
    );
};

export default Heart;