import { UPDATE_SCREEN } from "../../../configs/redux-types";

const screenHandler = (state, action) => {
    switch (action.type) {
        case UPDATE_SCREEN:
            return {
                ...state,
                screen: action.screen,
            };
    }
};

export default screenHandler;
