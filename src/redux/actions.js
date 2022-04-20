import * as types from './action-types';

export const updateScreen = screen => ({
    type: types.UPDATE_SCREEN,
    screen,
});

export const updatePasscodeEntry = passcodeEntry => ({
    type: types.UPDATE_PASSCODE_ENTRY,
    passcodeEntry,
});

export const updateLockedStatus = lockedStatus => ({
    type: types.UPDATE_LOCKED_STATUS,
    lockedStatus,
});