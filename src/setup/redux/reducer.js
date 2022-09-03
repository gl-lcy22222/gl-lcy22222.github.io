import {
    BLACK_SCREEN,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
    HOME_SCREEN,
    LOCKED,
    SOUND_ON,
} from "../../configs/constants";

import apps from './tempApps';

import appHandler from "../../containers/App/redux/handler";
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";
import homeScreenHandler from "../../containers/Screens/HomeScreen/redux/handler";

export const initialState = {
    screen: HOME_SCREEN,
    passcodeEntry: "",
    soundStatus: SOUND_ON,
    volume: 10,
    initialized: false,
    playground: {},
    apps: apps,
    appSize: 0,
    rowsPerPage: 0,
    currentPage: 0,
    isMobile: false,
    activeApp: null,
    description: null,
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    const handlers = [
        appHandler,
        screenHandler,
        passcodeScreenHandler,
        homeScreenHandler,
    ];

    const handler = handlers.find((handler) => handler(state, action));

    if (handler) {
        return handler(state, action);
    }

    return state;
};

export default reducer;