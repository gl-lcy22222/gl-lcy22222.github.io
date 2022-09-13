import {
    BLACK_SCREEN,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
    HOME_SCREEN,
    UPLOAD_SCREEN,
    LOCKED,
    SOUND_ON,
    TEST_HOST,
} from "../../configs/constants";
import googleConfig from '../../google/config.json';

import appHandler from "../../containers/App/redux/handler";
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";
import homeScreenHandler from "../../containers/Screens/HomeScreen/redux/handler";
import uploadScreenHandler from "../../containers/Screens/UploadScreen/redux/handler";
import { UPLOAD_PAGE } from "../../containers/Screens/UploadScreen/configs";

export const initialState = {
    anniversary: '2/22/2022',
    homeScreen: {
        notification: '',
    },
    screen: LOCK_SCREEN, // phone,
    soundStatus: SOUND_ON, // phone,
    volume: 10, // phone,
    playground: {},
    isMobile: false,
    passcodeEntry: "", // passcodeScreen
    apps: [], // homeScreen
    appSize: 0, // homeScreen
    rowsPerPage: 0, // homeScreen
    currentPage: 0, // homeScreen
    activeApp: null, // homeScreen
    uploadScreen: {
        currentUploadPage: UPLOAD_PAGE,
        appName: '',
        description: '',
        medias: [],
    },
};

export const testState = {
    anniversary: new Date(),
    homeScreen: {
        notification: '',
    },
    screen: HOME_SCREEN, // phone,
    soundStatus: SOUND_ON, // phone,
    volume: 10, // phone,
    playground: {},
    isMobile: false,
    passcodeEntry: "", // passcodeScreen
    apps: [], // homeScreen
    appSize: 0, // homeScreen
    rowsPerPage: 0, // homeScreen
    currentPage: 0, // homeScreen
    activeApp: null, // homeScreen
    uploadScreen: {
        currentUploadPage: UPLOAD_PAGE,
        appName: '',
        description: '',
        medias: [],
    },
};

const reducerState = googleConfig.redirectUri === TEST_HOST ? testState : initialState;

const reducer = (state = JSON.parse(JSON.stringify(reducerState)), action) => {
    const handlers = [
        appHandler,
        screenHandler,
        passcodeScreenHandler,
        homeScreenHandler,
        uploadScreenHandler,
    ];

    const handler = handlers.find((handler) => handler(state, action));

    if (handler) {
        return handler(state, action);
    }

    return state;
};

export default reducer;
