import { SET_ROWS_PER_PAGE, SET_APP_SIZE, SET_CURRENT_PAGE } from "./types";

const homeScreenHandler = (state, action) => {
    switch (action.type) {
        case SET_APP_SIZE:
            return {
                ...state,
                appSize: action.appSize,
            };
        case SET_ROWS_PER_PAGE:
            return {
                ...state,
                rowsPerPage: action.rowsPerPage,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
    }
};

export default homeScreenHandler;
