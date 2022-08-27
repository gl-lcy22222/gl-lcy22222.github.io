import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import Heart from "../Heart";

const useStyles = makeStyles({
    rootContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        overflow: 'hidden',
    },
});

const HeartAnimation = () => {
    const classes = useStyles();
    const ref = useRef();
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setHearts([]);

            const numberOfHearts = Math.floor(Math.random() * 10) + 1;
            const heartArr = [];

            for (let i = 0; i < numberOfHearts; i++) heartArr.push(<Heart key={i} canvas={ref}/>);

            setHearts(heartArr);
        }, 10000);
    }, []);

    return (
        <div className={classes.rootContainer}
            ref={ref}
        >
            {hearts.map(heart => heart)}
        </div>
    );
};

export default HeartAnimation;