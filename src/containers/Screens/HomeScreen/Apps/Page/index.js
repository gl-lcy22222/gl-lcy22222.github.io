import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { APP_CONTAINER_WIDTH, MAX_APPS_PER_ROW } from "../../../../../configs/constants";
import { states } from "../../redux";

import App from "../App";

const useStyles = makeStyles({
    rootContainer: {
        margin: "0% 5%",
        width: `${APP_CONTAINER_WIDTH}%`,
        minWidth: `${APP_CONTAINER_WIDTH}%`,
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "flex-start",
        justifyContent: "space-evenly",
        transition: `all 750ms ease`,
    },
});

const Page = ({
    pageNum,
    maxAppsPerPage,
    numOfPages,
    apps,
    currentPage,
    playground,
}) => {
    const classes = useStyles();

    const [transformAmount, setTransformAmount] = useState(0);
    const [prevPage, setPrevPage] = useState(0);

    const playgroundWidth = playground.width;

    useEffect(() => {
        if (prevPage > currentPage)
            setTransformAmount(
                transformAmount + playgroundWidth * (prevPage - currentPage)
            );
        else if (prevPage < currentPage)
            setTransformAmount(
                transformAmount - playgroundWidth * (currentPage - prevPage)
            );

        setPrevPage(currentPage);
    }, [currentPage, prevPage]);

    return (
        <div
            key={pageNum}
            className={classes.rootContainer}
            style={{
                transform: `translate(${transformAmount}px, 0px)`,
            }}
        >
            {apps
                .slice(pageNum * maxAppsPerPage, (pageNum + 1) * maxAppsPerPage)
                .map((app, i) => (
                    <App
                        key={i}
                        appNumber={pageNum * maxAppsPerPage + i}
                        app={app}
                        playground={playground}
                    />
                ))}
            {numOfPages === pageNum + 1 &&
                Array(MAX_APPS_PER_ROW - (apps.length % MAX_APPS_PER_ROW))
                    .fill(0)
                    .map(() => <App key={Math.random()} />)}
        </div>
    );
};

export default connect(states)(Page);
