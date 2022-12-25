export const BLACK_SCREEN = 'BLACK_SCREEN';
export const LOCK_SCREEN = 'LOCK_SCREEN';
export const PASSCODE_SCREEN = 'PASSCODE_SCREEN';
export const HOME_SCREEN = 'HOME_SCREEN';
export const UPLOAD_SCREEN = 'UPLOAD_SCREEN';

export const SOUND_ON = 'SOUND_ON';
export const SOUND_OFF = 'SOUND_OFF';

export const TAPPING_SOUND = 'TAPPING_SOUND';
export const LOCKING_SOUND = 'LOCKING_SOUND';
export const ERIC_CHOU_SOUND = 'ERIC_CHOU_SOUND';

export const MAX_APPS_PER_ROW = 4;
export const APP_SIZE = 16;
export const APP_SIDE_GAPS = 3;
export const APP_LEVEL_GAPS = 4;
export const APP_CONTAINER_WIDTH = 90;

export const CENTERING_TIME = 1500;
export const TRANSITIONING_TIME = 2000;
export const ACTIVE_TIME = 3000;

export const NOTIFICATION_DURATION = 5;
export const NOTIFICATION_TRANSITION_TIME = 1;

export const isChristmas = new Date().getMonth() === 11 && new Date().getDate() === 25;
export const isChristmasTime = new Date().getMonth() === 11;

export const backgroundImageSource = isChristmasTime
    ? '/images/ChristmasTree.jpg'
    : '/images/background.jpg';
export const appStoreImageSource = '/images/appStore.png';
export const backIconImageSource = '/images/backIcon.png';

export const CREATE = 'CREATE';
export const ADD = 'ADD';

export const TEST_HOST = ''
// 'http://localhost:3000';

export const SWIPE = {
    POSITIVE: 'POSITIVE',
    NEGATIVE: 'NEGATIVE',
};