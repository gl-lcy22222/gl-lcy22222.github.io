import { MAX_APPS_PER_ROW } from "../../../../configs/constants";
import {
    setAppSize,
    setCurrentPage,
    setRowsPerPage,
    setActiveApp,
    setPlaygroundInfo,
} from "./actions";

export const states = ({
    apps,
    appSize,
    rowsPerPage,
    currentPage,
    activeApp,
    playground,
}) => {
    const maxAppsPerPage = rowsPerPage * MAX_APPS_PER_ROW;
    const numOfPages = rowsPerPage
        ? Math.ceil(apps.length / maxAppsPerPage)
        : 0;

    return {
        apps,
        appSize,
        rowsPerPage,
        currentPage,
        numOfPages,
        maxAppsPerPage,
        activeApp,
        playground,
    };
};

export const dispatches = {
    setAppSize,
    setRowsPerPage,
    setCurrentPage,
    setActiveApp,
    setPlaygroundInfo,
};
