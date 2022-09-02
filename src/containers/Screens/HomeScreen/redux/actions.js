import { SET_ROWS_PER_PAGE, SET_APP_SIZE, SET_CURRENT_PAGE } from "./types";

export const setAppSize = appSize => ({
    type: SET_APP_SIZE,
    appSize,
});

export const setRowsPerPage = rowsPerPage => ({
    type: SET_ROWS_PER_PAGE,
    rowsPerPage,
});

export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});