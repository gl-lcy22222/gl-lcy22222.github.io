import {
    BLACK_SCREEN,
    LOCK_SCREEN,
    PASSCODE_SCREEN,
    LOCKED,
    SOUND_ON,
} from "../../configs/constants";

import appHandler from "../../containers/App/redux/handler";
import screenHandler from "../../containers/Screen/redux/handler";
import passcodeScreenHandler from "../../containers/Screens/PasscodeScreen/redux/handler";

const initialState = {
    screen: LOCK_SCREEN,
    passcodeEntry: "",
    soundStatus: SOUND_ON,
    volume: 10,
    initialized: false,
    apps: [],
    isMobile: false,
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    const handlers = [appHandler, screenHandler, passcodeScreenHandler];

    const handler = handlers.find((handler) => handler(state, action));

    if (handler) {
        return handler(state, action);
    }

    return state;
};

export default reducer;
