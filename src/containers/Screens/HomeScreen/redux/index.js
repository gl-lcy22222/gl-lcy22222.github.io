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
    const maxAppsPerRow = 4;
    const maxAppsPerPage = rowsPerPage * maxAppsPerRow;
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
