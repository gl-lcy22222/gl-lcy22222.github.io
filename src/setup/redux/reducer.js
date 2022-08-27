import {
    BLACK_SCREEN,
    LOCKED,
    SOUND_ON,
} from '../../configs/constants';

import appHandler from '../../containers/App/App/redux/handler';
import screenHandler from '../../containers/Screen/redux/handler';

const initialState = {
    screen: BLACK_SCREEN,
    passcodeEntry: '',
    lockedStatus: LOCKED,
    soundStatus: SOUND_ON,
    volume: 10,
    initialized: false,
    apps: [],
    isMobile: false,
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    const handlers = [appHandler, screenHandler];

    const handler = handlers.find(handler => handler(state, action));

    if (handler) {
        return handler(state, action);
    }

    return state;
};

export default reducer;