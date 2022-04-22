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

export const updateSoundStatus = soundStatus => ({
    type: types.UPDATE_SOUND_STATUS,
    soundStatus,
});

export const updateVolume = volume => ({
    type: types.UPDATE_VOLUME,
    volume,
});

// ------------------------------------------------------------------------

export const playAudio = audio => ({
    type: types.PLAY_AUDIO,
    audio,
});