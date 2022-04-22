import * as types from './action-types';
import {
    BLACK_SCREEN,
    LOCKED_SCREEN,
    LOCK_SCREEN,
    HOME_SCREEN,
    LOCKED,
    SOUND_ON,
    VOLUME_UP,
} from './constants';

const initialState = {
    screen: BLACK_SCREEN,
    passcodeEntry: '',
    lockedStatus: LOCKED,
    soundStatus: SOUND_ON,
    volume: 10,
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

        case types.UPDATE_SOUND_STATUS:
            return {
                ...state,
                soundStatus: action.soundStatus,
            };

        case types.UPDATE_VOLUME:
            console.log(state.volume)
            if (action.volume === VOLUME_UP) {
                return {
                    ...state,
                    volume: Math.min(state.volume + 1, 10),
                };
            }
            else {
                return {
                    ...state,
                    volume: Math.max(1, state.volume - 1),
                };
            }

        case types.PLAY_AUDIO:
            if (state.soundStatus === SOUND_ON) {
                const audio = new Audio(action.audio);
                audio.volume = state.volume / 10;
                audio.play();
            }

            return state;

        default:
            return state;
    }
};

export default reducer;