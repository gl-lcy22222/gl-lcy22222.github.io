import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { states } from "../redux";
import PageSectionDots from "./PageSelectionDot";

const useStyles = makeStyles({
    rootContainer: {
        height: "5%",
        minHeight: "5%",
        width: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

const PageSelection = ({
    numOfPages,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            {Array(numOfPages)
                .fill()
                .map((section, num) => (
                    <PageSectionDots key={num} pageNum={num}/>
                ))}
        </div>
    );
};

export default connect(states)(PageSelection);
