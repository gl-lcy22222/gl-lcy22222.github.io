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
    setAppSize,
    setRowsPerPage,
    setPlaygroundInfo,
}) => {
    const classes = useStyles();

    const containerRef = useRef();

    console.log(containerRef.current?.clientHeight, '<---   ');

    useEffect(() => {
        // console.log(containerRef?.current.clientHeight)
        if (containerRef.current) {
            const ref = containerRef.current;

            console.log(ref, ref.clientHeight, '--')
            calculateAppSize(containerRef.current, setAppSize);
            calcRowsPerPage(ref, appSize, setRowsPerPage);
            setPlaygroundInfo({
                width: ref.clientWidth,
                height: ref.clientHeight,
            });
        }

        if (!appSize) {
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

    console.log('height:', height)
    console.log('appMarginTop:', appMarginTop)
    console.log('appMarginBottom:', appMarginBottom)
    console.log('appNameHeight:', appNameHeight)
    console.log('appSize:', appSize)
    console.log('rowHeight:', rowHeight)
    console.log('ref:', ref, ref.clientHeight)    

    setRowsPerPage(Math.floor(height / rowHeight));
};

const calculateAppSize = (ref, setAppSize) => {
    const homeScreen = ref.parentNode.parentNode;
    const homeScreenWidth = homeScreen.clientWidth;

    setAppSize(homeScreenWidth * percent(APP_SIZE));
};

export default connect(states, dispatches)(Apps);
