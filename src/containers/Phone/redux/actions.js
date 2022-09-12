import {
    SET_NOTIFICATION
} from './types'

export const setNotification = notification => ({
    type: SET_NOTIFICATION,
    notification,
});
