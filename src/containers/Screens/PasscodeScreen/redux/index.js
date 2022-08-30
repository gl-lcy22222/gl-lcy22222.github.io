import { updateScreen } from "../../../Screen/redux/actions";
import {
    deletePasscodeEntry,
    updatePasscodeEntry,
    clearPasscodeEntry,
} from "./actions";

export const states = ({ passcodeEntry }) => ({
    passcodeEntry,
});

export const dispatches = {
    updatePasscodeEntry,
    deletePasscodeEntry,
    clearPasscodeEntry,
    updateScreen,
};
