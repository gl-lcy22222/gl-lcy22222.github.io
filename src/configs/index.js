import ERIC_CHOU_AUDIO_SOURCE from '../sources/eric.mp3';
import TAPPING_SOUND_SOURCE from '../sources/tappingSound.mov';
import { ERIC_CHOU_SOUND, LOCKING_SOUND, TAPPING_SOUND } from './constants';

export const uploadScreen = {
};

export const app = {
    color: 'pink',
};

export const zIndex = (() => {
    // Each layer is + 10, so that it gives me more wiggle room in case there are stuff in betw
    // for example, different background animations go on top of one another
    const onTopOf = val => val + 10;

    const reactAppBackground = 1;
    
    const heartAnimation = onTopOf(reactAppBackground);

    const phone = onTopOf(heartAnimation);

    const homeScreen = onTopOf(phone);

    const homeScreenAnimation = onTopOf(homeScreen);
    const rosePetal = homeScreenAnimation;

    const homeScreenContents = onTopOf(homeScreenAnimation);
    const apps = homeScreenContents;
    const dock = homeScreenContents;
    const pageSelection = homeScreenContents;
    const descriptionActiveBubble = homeScreenContents + 1;
    const notification = homeScreenContents + 2;

    const phoneScreenTop = onTopOf(homeScreenContents);

    return {
        reactAppBackground,
        heartAnimation,
        phone,
        rosePetal,
        apps,
        dock,
        pageSelection,
        descriptionActiveBubble,
        notification,
        phoneScreenTop,
    };
})();

export const sounds = {
    [TAPPING_SOUND]: new Audio(TAPPING_SOUND_SOURCE),
    [LOCKING_SOUND]: new Audio("https://picturetosound.com/content/A8CA14EE1B24F5D038E4336EBD519A88A1D329F7/audio_preview.mp3"),
    [ERIC_CHOU_SOUND]: new Audio(ERIC_CHOU_AUDIO_SOURCE),
};
