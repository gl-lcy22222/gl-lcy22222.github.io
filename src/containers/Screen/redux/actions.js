import { UPDATE_SCREEN } from "../../../configs/redux-types";

export const updateScreen = screen => ({
    type: UPDATE_SCREEN,
    screen,
});