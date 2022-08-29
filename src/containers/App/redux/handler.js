import { SET_IS_MOBILE } from "../../../configs/redux-types";

const appHandler = (state, action) => {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile,
            };
    }
};

export default appHandler;
