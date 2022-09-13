import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { APP_CONTAINER_WIDTH, APP_LEVEL_GAPS, APP_SIZE } from "../../../../configs/constants";
import { dispatches, states } from "../redux";
import { percent } from "../../../../helpers";
import Page from "./Page";
import { useEffect, useRef } from "react";
import { zIndex } from "../../../../configs";

const marginTop = 10;

const useStyles = makeStyles({
    rootContainer: {
        flex: '1 1 auto',
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: `${marginTop}%`,

        zIndex: zIndex.apps,

        // overflow: 'hidden', // TODO: UNCOMMENT?
    },
});

const Apps = ({
    appSize,
    numOfPages,
    setAppSize,
    setRowsPerPage,
}) => {
    const classes = useStyles();

    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            const ref = containerRef.current;

            calculateAppSize(containerRef.current, setAppSize);
            calcRowsPerPage(ref, appSize, setRowsPerPage);
        }
    }, [appSize]);

    return (
        <div
            className={classes.rootContainer}
            ref={containerRef}
        >
            {Array(numOfPages)
                .fill(0)
                .map((page, pageNum) => (
                    <Page pageNum={pageNum} key={pageNum}/>
                ))}
        </div>
    );
};

const calcRowsPerPage = (ref, appSize, setRowsPerPage) => {
    const height = ref.clientHeight;
    const width = ref.clientWidth * percent(APP_CONTAINER_WIDTH);
    const appMarginTop = width * percent(APP_LEVEL_GAPS);
    const appMarginBottom = appSize * percent(10);
    const appNameHeight = appSize * percent(50);
    const rowHeight = appSize + appMarginTop + appMarginBottom + appNameHeight;
    setRowsPerPage(Math.floor(height / rowHeight));
};

const calculateAppSize = (ref, setAppSize) => {
    const homeScreen = ref.parentNode.parentNode;
    const homeScreenWidth = homeScreen.clientWidth;

    setAppSize(homeScreenWidth * percent(APP_SIZE));
};

export default connect(states, dispatches)(Apps);
