import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { zIndex } from "../../../../../configs";
import { generateInRange, minute, second } from "../../../../../helpers";
import { states } from "../../redux";

import redRosePetal from '../../../../../sources/redRosePetal.png';

const useStyles = makeStyles({
    rootContainer: {
        position: 'absolute',
        backgroundSize: '100% 100%',
        zIndex: zIndex.rosePetal,
        background: `url(${redRosePetal})`,
    },
});

const RosePetal = ({
    playground,
}) => {
    const classes = useStyles();

    const [degree, setDegree] = useState(0);
    const [animationTime] = useState(generateInRange(5, 40));
    const [negative] = useState(generateInRange(0, 1) === 0);
    const [xPosition] = useState(generateInRange(5, 95));
    const [yTranslation, setYTranslation] = useState(0);
    const [size] = useState(generateInRange(3, 7))
    
    const lifeSpan = animationTime * 3;

    useEffect(() => {
        setYTranslation(playground.height * 2);
    }, [playground]);

    useEffect(() => {
        const interval = setInterval(() => setDegree(degree => degree + 1), animationTime);
                
        setTimeout(() => clearInterval(interval), second(lifeSpan));

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={classes.rootContainer}
            style={{
                transform: `rotate3d(1, 1, 1, ${
                    negative ? "-" : ""
                }${degree}deg)`,
                width: `${size}%`,
                height: `${size}%`,
                top: `${-animationTime}%`,
                left: `${xPosition}%`,
                translate: `0px ${yTranslation}px`,
                transition: `translate ${lifeSpan}s ease`,
            }}
        />
    );
};

export default connect(states)(RosePetal);