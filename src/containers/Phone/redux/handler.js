import { SET_NOTIFICATION } from "./types";

const phoneHandler = (state, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                phone: {
                    ...state.phone,
                    notification: action.notification,
                }
            }
    }
};

export default phoneHandler;