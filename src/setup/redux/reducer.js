import {
    BLACK_SCREEN,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
    HOME_SCREEN,
    UPLOAD_SCREEN,
    LOCKED,
    SOUND_ON,
} from "../../configs/constants";

import appHandler from "../../containers/App/redux/handler";
import phoneHandler from "../../containers/Phone/redux/handler";
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";
import homeScreenHandler from "../../containers/Screens/HomeScreen/redux/handler";
import uploadScreenHandler from "../../containers/Screens/UploadScreen/redux/handler";
import { UPLOAD_PAGE } from "../../containers/Screens/UploadScreen/configs";

export const initialState = {
    anniversary: '2/22/2022',
    phone: {
        notification: '',
        notificationDuration: 3,
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

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    const handlers = [
        appHandler,
        phoneHandler,
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
