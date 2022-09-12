import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { connect } from "react-redux";
import { generateInRange } from "../../../../helpers";
import { states } from "../redux";
import RosePetal from "./RosePetal";

const useStyles = makeStyles({
    rootContainer: {
        // transform: 'matrix3d(0.929, 0.369275, -0.0244082, 0, -0.367815, 0.928589, 0.0493373, 0, 0.0408843, -0.0368566, 0.998484, 0, 796.59, 299.838, 138.519, 1)',
        // zIndex: zIndex.homeScreen.backgroundAnimation,
    },
});

const BackgroundAnimations = ({
    anniversary,
}) => {
    const classes = useStyles();

    const [roses] = useState(generateInRange(30, 50));

    const anniversaryDate = new Date(anniversary);
    const todaysDate = new Date();
    const isAnniversary = 
    true; 
    // anniversaryDate.getDate() === todaysDate.getDate();

    return (
        <div className={classes.rootContainer}>
            {isAnniversary &&
                Array(roses)
                    .fill(0)
                    .map((rose, id) => <RosePetal key={id} />)}
        </div>
    );
};

export default connect(states)(BackgroundAnimations);