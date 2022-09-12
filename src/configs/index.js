import ERIC_CHOU_AUDIO_SOURCE from '../sources/eric.mp3';
import TAPPING_SOUND_SOURCE from '../sources/tappingSound.mov';
import { ERIC_CHOU_SOUND, LOCKING_SOUND, TAPPING_SOUND } from './constants';

export const uploadScreen = {
};

export const app = {
    color: 'pink',
};

export const zIndex = {
    phone: 1,
    phoneAnimations: 2,
    app: 3,
    appName: 3,
    dock: 3,
    descriptionActiveBubble: 4,
};

export const sounds = {
    [TAPPING_SOUND]: new Audio(TAPPING_SOUND_SOURCE),
    [LOCKING_SOUND]: new Audio("https://picturetosound.com/content/A8CA14EE1B24F5D038E4336EBD519A88A1D329F7/audio_preview.mp3"),
    [ERIC_CHOU_SOUND]: new Audio(ERIC_CHOU_AUDIO_SOURCE),
};
