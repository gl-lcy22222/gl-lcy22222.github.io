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

import appHandler from "../../containers/App/redux/handler";
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";
import homeScreenHandler from "../../containers/Screens/HomeScreen/redux/handler";
import uploadScreenHandler from "../../containers/Screens/UploadScreen/redux/handler";
import { UPLOAD_PAGE } from "../../containers/Screens/UploadScreen/configs";

import { isTest } from "../../configs";

export const initialState = {
    anniversary: '2/22/2022',
    homeScreen: {
        notification: '',
    },
    screen: BLACK_SCREEN, // phone,
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
    ...initialState,
    anniversary: new Date(),
    screen: HOME_SCREEN,
};

const reducerState = isTest ? testState : initialState;

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
