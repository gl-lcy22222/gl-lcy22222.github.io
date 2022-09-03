import {
    SET_ROWS_PER_PAGE,
    SET_APP_SIZE,
    SET_CURRENT_PAGE,
    SET_ACTIVE_APP,
    SET_PLAYGROUND_INFO,
    SET_DESCRIPTION,
} from "./types";

export const setAppSize = (appSize) => ({
    type: SET_APP_SIZE,
    appSize,
});

export const setRowsPerPage = (rowsPerPage) => ({
    type: SET_ROWS_PER_PAGE,
    rowsPerPage,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setActiveApp = (activeApp) => ({
    type: SET_ACTIVE_APP,
    activeApp,
});

export const setPlaygroundInfo = playgroundInfo => ({
    type: SET_PLAYGROUND_INFO,
    playgroundInfo,
});

export const setDescription = description => ({
    type: SET_DESCRIPTION,
    description,
});