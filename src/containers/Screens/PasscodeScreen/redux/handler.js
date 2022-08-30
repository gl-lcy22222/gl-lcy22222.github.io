import {
    CLEAR_PASSCODE_ENTRY,
    DELETE_PASSCODE_ENTRY,
    UPDATE_PASSCODE_ENTRY,
} from "./types";

const passcodeScreenHandler = (state, action) => {
    switch (action.type) {
        case UPDATE_PASSCODE_ENTRY:
            return {
                ...state,
                passcodeEntry: state.passcodeEntry + action.passcodeEntry,
            };

        case DELETE_PASSCODE_ENTRY:
            return {
                ...state,
                passcodeEntry: state.passcodeEntry.slice(
                    0,
                    state.passcodeEntry.length - 1
                ),
            };

        case CLEAR_PASSCODE_ENTRY:
            return {
                ...state,
                passcodeEntry: "",
            };
    }
};

export default passcodeScreenHandler;
