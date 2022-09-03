import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { APP_LEVEL_GAPS, APP_SIZE } from "../../../../configs/constants";
import { dispatches, states } from "../redux";
import App from "./App";
import { percent } from "../../../../helpers";
import { useEffect, useState } from "react";

const marginTop = 10;
const appContainerWidth = 90;

const useStyles = makeStyles({
    rootContainer: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: `${marginTop}%`,
        overflow: "hidden",
    },
    appsContainer: {
        margin: "0% 5%",
        width: `${appContainerWidth}%`,
        minWidth: `${appContainerWidth}%`,
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "flex-start",
        justifyContent: "space-evenly",

        transition: `all 750ms ease`,
    },
});

const Apps = ({
    apps,
    appSize,
    maxAppsPerPage,
    numOfPages,
    activeApp,
    currentPage,
    setAppSize,
    setRowsPerPage,
}) => {
    const classes = useStyles();

    const [transformAmount, setTransformAmount] = useState(0);
    const [prevPage, setPrevPage] = useState(0);
    const [clientWidth, setClientWidth] = useState(0);

    useEffect(() => {
        if (prevPage > currentPage) setTransformAmount(transformAmount + (clientWidth * (prevPage - currentPage)));
        else if (prevPage < currentPage) setTransformAmount(transformAmount - (clientWidth * (currentPage - prevPage)));

        setPrevPage(currentPage);
    }, [currentPage, prevPage]);

    return (
        <div className={classes.rootContainer}
            ref={ref => handleRef(ref, appSize, setAppSize, setRowsPerPage, setClientWidth)}>
            {Array(numOfPages)
                .fill(0)
                .map((page, pageNum) => (
                    <div
                        key={pageNum}
                        className={classes.appsContainer}
                        style={{
                            transform: `translate(${transformAmount}px, 0px)`,
                        }}
                    >
                        {apps
                            .slice(
                                pageNum * maxAppsPerPage,
                                (pageNum + 1) * maxAppsPerPage
                            )
                            .map((app, i) => (
                                <App
                                    key={i}
                                    appNumber={pageNum * maxAppsPerPage + i}
                                    name={app.name}
                                    collection={app.collection}
                                />
                            ))}
                        {numOfPages === pageNum + 1 && (
                            Array(2).fill(0).map(() => <App key={Math.random()}/>)
                        )}
                    </div>
                ))}
        </div>
    );
};

const calcRowsPerPage = (ref, appSize, setRowsPerPage) => {
    const height = ref.clientHeight;
    const width = ref.clientWidth * percent(appContainerWidth);
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

const handleRef = (ref, appSize, setAppSize, setRowsPerPage, setClientWidth) => {
    if (!ref) return;

    calcRowsPerPage(ref, appSize, setRowsPerPage);
    calculateAppSize(ref, setAppSize);
    setClientWidth(ref.clientWidth);
};

export default connect(states, dispatches)(Apps);
