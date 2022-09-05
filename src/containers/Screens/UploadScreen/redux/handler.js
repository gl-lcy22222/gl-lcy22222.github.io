import {
    SET_CURRENT_UPLOAD_PAGE,
    SET_APP_NAME,
    SET_DESCRIPTION,
    ADD_MEDIA,
} from "./types";

const uploadScreenHandler = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_UPLOAD_PAGE:
            return {
                ...state,
                uploadScreen: {
                    ...state.uploadScreen,
                    currentUploadPage: action.currentUploadPage,
                },
            };
        case SET_APP_NAME:
            return {
                ...state,
                uploadScreen: {
                    ...state.uploadScreen,
                    appName: action.appName,
                },
            };
        case SET_DESCRIPTION:
            return {
                ...state,
                uploadScreen: {
                    ...state.uploadScreen,
                    description: action.description,
                },
            };
        case ADD_MEDIA:
            return {
                ...state,
                uploadScreen: {
                    ...state.uploadScreen,
                    medias: [...state.uploadScreen.medias, action.media],
                },
            };
        default:
            return null;
    }
};

export default uploadScreenHandler;
