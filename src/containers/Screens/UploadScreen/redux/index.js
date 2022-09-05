import { updateScreen } from "../../../Screen/redux/actions";
import { addMedia, setAppName, setCurrentUploadPage, setDescription } from "./actions";

export const states = ({ playground, uploadScreen }) => {
    const { currentUploadPage, appName, description, medias } = uploadScreen;
    return {
        playground,
        currentUploadPage,
        appName,
        description,
        medias,
    };
};

export const dispatches = {
    setAppName,
    setDescription,
    setCurrentUploadPage,
    updateScreen,
    addMedia,
};