import {
    SET_APP_NAME,
    SET_CURRENT_UPLOAD_PAGE,
    SET_DESCRIPTION,
    ADD_MEDIA,
} from './types';

export const setCurrentUploadPage = currentUploadPage => ({
    type: SET_CURRENT_UPLOAD_PAGE,
    currentUploadPage,
});

export const setAppName = appName => ({
    type: SET_APP_NAME,
    appName,
});

export const setDescription = description => ({
    type: SET_DESCRIPTION,
    description,
});

export const addMedia = media => ({
    type: ADD_MEDIA,
    media,
});