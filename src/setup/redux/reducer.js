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
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";
import homeScreenHandler from "../../containers/Screens/HomeScreen/redux/handler";
import uploadScreenHandler from "../../containers/Screens/UploadScreen/redux/handler";

export const initialState = {
    screen: HOME_SCREEN,
    passcodeEntry: "", // passcodeScreen
    soundStatus: SOUND_ON,
    volume: 10,
    playground: {},
    apps: [], // homeScreen
    appSize: 0, // homeScreen
    rowsPerPage: 0, // homeScreen
    currentPage: 0, // homeScreen
    isMobile: false,
    activeApp: null, // homeScreen
    uploadScreen: {
        currentUploadPage: 0,
        appName: '',
        description: '',
        medias: [],
    },
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
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
