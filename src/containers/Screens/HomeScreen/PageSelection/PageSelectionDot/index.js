import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { connect } from "react-redux";
import { dispatches, states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        margin: "0 1%",
        height: '100%',
        display: 'flex',
        alignItems: "center",
    },
    dotContainer: {
        borderRadius: "50%",
        backgroundColor: "white",
        height: '100%',
        width: '100%',

        "&:hover": {
            cursor: "pointer",
        },
    }
});

const PageSectionDots = ({
    pageNum,
    activeApp,
    currentPage,
    setCurrentPage,
}) => {
    const classes = useStyles();

    const [size, setSize] = useState(0);

    const isActive = activeApp !== null;

    return (
        <div
            className={classes.rootContainer}
            style={{
                width: size,
                opacity: pageNum === currentPage ? 1 : 0.3,
            }}
            ref={(ref) => ref && calcSize(ref, setSize)}
            onClick={() => !isActive && setCurrentPage(pageNum)}
        >
            <div
                className={classes.dotContainer}
                style={{
                    height: size,
                    width: size,
                }}
            />
        </div>
    );
};

const calcSize = (ref, setSize) => {
    const parent = ref.parentNode;
    const clientHeight = parent.clientHeight;
    setSize(clientHeight / 3);
};

export default connect(states, dispatches)(PageSectionDots);
