import { UPDATE_SCREEN } from "./types";

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
