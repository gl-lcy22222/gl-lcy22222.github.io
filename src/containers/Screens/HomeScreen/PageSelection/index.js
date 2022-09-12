import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { zIndex } from "../../../../configs";
import { CENTERING_TIME } from "../../../../configs/constants";
import { states } from "../redux";
import PageSectionDots from "./PageSelectionDot";

const useStyles = makeStyles({
    rootContainer: {
        height: "5%",
        minHeight: "5%",
        maxHeight: "5%",
        width: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        transition: `all ${CENTERING_TIME}ms ease`,
        zIndex: zIndex.homeScreen.pageSelection,
    },
});

const PageSelection = ({
    numOfPages,
    activeApp,
}) => {
    const classes = useStyles();

    const isActive = activeApp !== null;

    return (
        <div className={classes.rootContainer}
            style={{
                opacity: isActive ? 0 : 1
            }}
        >
            {Array(numOfPages)
                .fill()
                .map((section, num) => (
                    <PageSectionDots key={num} pageNum={num}/>
                ))}
        </div>
    );
};

export default connect(states)(PageSelection);
