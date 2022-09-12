import { setPlaygroundInfo } from "../../Screens/HomeScreen/redux/actions";
import { updateScreen } from "./actions";

export const states = ({ screen }) => {
    return {
        screen,
    };
};

export const dispatches = {
    setPlaygroundInfo,
    updateScreen,
};