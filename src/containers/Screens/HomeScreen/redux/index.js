import { setAppSize, setCurrentPage, setRowsPerPage, setActiveApp } from "./actions";

export const states = ({
    apps,
    appSize,
    rowsPerPage,
    currentPage,
    activeApp,
}) => {
    const maxAppsPerRow = 4;
    const maxAppsPerPage = rowsPerPage * maxAppsPerRow;
    const numOfPages = rowsPerPage ? Math.ceil(apps.length / maxAppsPerPage) : 0;
    
    return {
        apps,
        appSize,
        rowsPerPage,
        currentPage,
        numOfPages,
        maxAppsPerPage,
        activeApp,
    };
};

export const dispatches = {
    setAppSize,
    setRowsPerPage,
    setCurrentPage,
    setActiveApp,
};
