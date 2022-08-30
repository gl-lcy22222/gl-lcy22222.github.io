import { UPDATE_PASSCODE_ENTRY, DELETE_PASSCODE_ENTRY, CLEAR_PASSCODE_ENTRY } from "./types";

export const updatePasscodeEntry = passcodeEntry => ({
    type: UPDATE_PASSCODE_ENTRY,
    passcodeEntry,
});

export const deletePasscodeEntry = () => ({
    type: DELETE_PASSCODE_ENTRY,
});

export const clearPasscodeEntry = () => ({
    type: CLEAR_PASSCODE_ENTRY
});