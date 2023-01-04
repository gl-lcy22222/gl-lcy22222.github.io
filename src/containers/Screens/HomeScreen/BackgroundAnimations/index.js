import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { generateInRange } from "../../../../helpers";
import { states } from "../redux";

import RosePetal from "./RosePetal";
import Fireworks from "./Fireworks";
import SnowfallAnimations from "../SnowfallAnimations";
import NewYearsFireworks from "./NewYearsFireworks";

const useStyles = makeStyles({
    rootContainer: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
});

const BackgroundAnimations = ({
    anniversary,
}) => {
    const classes = useStyles();

    const [numOfRoses] = useState(generateInRange(30, 50));

    const anniversaryDate = new Date(anniversary);
    const todaysDate = new Date();
    const isAnniversary = anniversaryDate.getDate() === todaysDate.getDate();
    const isChristmasTime = todaysDate.getMonth() === 11;
    const isNewYears = todaysDate.getMonth() === 0 && todaysDate.getDate() === 1;

    return (
        <div className={classes.rootContainer}>
            {isAnniversary &&
                Array(numOfRoses)
                    .fill(0)
                    .map((rose, id) => <RosePetal key={id} />)}
            {isAnniversary && <Fireworks/>}
            {isChristmasTime && <SnowfallAnimations/>}
            {/* {isNewYears && <NewYearsFireworks/>} */}
        </div>
    );
};

export default connect(states)(BackgroundAnimations);