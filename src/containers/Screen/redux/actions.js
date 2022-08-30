import { UPDATE_SCREEN, } from './types';

export const updateScreen = screen => ({
    type: UPDATE_SCREEN,
    screen,
});