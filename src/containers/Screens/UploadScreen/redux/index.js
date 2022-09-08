import { updateScreen } from "../../../Screen/redux/actions";
import { setApps } from "../../HomeScreen/redux/actions";
import { addMedia, clearUploadScreen, setAppId, setAppName, setCurrentUploadPage, setDescription } from "./actions";

export const states = ({ playground, apps, uploadScreen }) => {
    const { currentUploadPage, appName, description, medias, appId } = uploadScreen;
    return {
        playground,
        currentUploadPage,
        appName,
        description,
        medias,
        apps,
        appId,
    };
};

export const dispatches = {
    setAppName,
    setDescription,
    setCurrentUploadPage,
    updateScreen,
    setAppId,
    addMedia,
    setApps,
    clearUploadScreen,
};