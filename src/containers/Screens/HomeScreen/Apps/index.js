import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { APP_CONTAINER_WIDTH, APP_LEVEL_GAPS, APP_SIZE } from "../../../../configs/constants";
import { dispatches, states } from "../redux";
import { percent } from "../../../../helpers";
import Page from "./Page";
import { useEffect, useRef } from "react";

const marginTop = 10;

const useStyles = makeStyles({
    rootContainer: {
        flex: '1 1 auto',

        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: `${marginTop}%`,

        overflow: 'hidden',
    },
});

const Apps = ({
    appSize,
    numOfPages,
    activeApp,
    playground,
    setAppSize,
    setRowsPerPage,
    setActiveApp,
    setPlaygroundInfo,
}) => {
    const inactiveCleanup = () => {
        setActiveApp(null);
    };

    const classes = useStyles();

    const containerRef = useRef();

    const isActive = activeApp !== null;

    useEffect(() => {
        if (containerRef.current) {
            const ref = containerRef.current;
            calcRowsPerPage(ref, appSize, setRowsPerPage);
            calculateAppSize(ref, setAppSize);
            setPlaygroundInfo({
                width: ref.clientWidth,
                height: ref.clientHeight,
            });
        }
    }, [containerRef]);

    return (
        <div
            className={classes.rootContainer}
            ref={containerRef}
            onClick={() => isActive && inactiveCleanup()}
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
