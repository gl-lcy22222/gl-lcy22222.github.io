import * as types from './action-types';
import {
    BLACK_SCREEN,
    LOCKED_SCREEN,
    LOCK_SCREEN,
    HOME_SCREEN,
    LOCKED,
} from './constants';

const initialState = {
    screen: HOME_SCREEN,
    passcodeEntry: '',
    lockedStatus: LOCKED,
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case types.UPDATE_SCREEN:
            return {
                ...state,
                screen: action.screen,
            };
            
        case types.UPDATE_PASSCODE_ENTRY:
            return {
                ...state,
                passcodeEntry: action.passcodeEntry,
            };

        case types.UPDATE_LOCKED_STATUS:
            return {
                ...state,
                lockedStatus: action.lockedStatus,
            };

        default:
            return state;
    }
};

export default reducer;