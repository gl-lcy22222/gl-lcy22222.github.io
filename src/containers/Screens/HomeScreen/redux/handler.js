import {
    SET_ROWS_PER_PAGE,
    SET_APP_SIZE,
    SET_CURRENT_PAGE,
    SET_ACTIVE_APP,
    SET_PLAYGROUND_INFO,
} from "./types";

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
        case SET_ACTIVE_APP:
            return {
                ...state,
                activeApp: action.activeApp,
            };
        case SET_PLAYGROUND_INFO:
            return {
                ...state,
                playground: {
                    ...action.playgroundInfo,
                },
            };
    }
};

export default homeScreenHandler;
