import { setPlaygroundInfo } from "../../Screens/HomeScreen/redux/actions";

export const states = ({ screen }) => {
    return {
        screen,
    };
};

export const dispatches = {
    setPlaygroundInfo,
};
