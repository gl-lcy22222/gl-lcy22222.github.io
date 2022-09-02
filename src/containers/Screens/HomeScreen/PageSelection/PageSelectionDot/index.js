import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { dispatches, states } from "../../redux";

const useStyles = makeStyles({
    rootContainer: {
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
        margin: "0 1%",

        "&:hover": {
            cursor: "pointer",
        },
    },
});

const PageSectionDots = ({ pageNum, currentPage, setCurrentPage }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.rootContainer}
            style={{
                opacity: pageNum === currentPage ? 1 : 0.3,
            }}
            onClick={() => setCurrentPage(pageNum)}
        />
    );
};

export default connect(states, dispatches)(PageSectionDots);
