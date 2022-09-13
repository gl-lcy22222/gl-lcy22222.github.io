import { MAX_APPS_PER_ROW } from "../../../../configs/constants";
import {
    setAppSize,
    setCurrentPage,
    setRowsPerPage,
    setActiveApp,
    setNotification,
} from "./actions";
import {
    updateScreen,
} from '../../../Screen/redux/actions';

export const states = ({
    isMobile,
    apps,
    appSize,
    rowsPerPage,
    currentPage,
    activeApp,
    playground,
    anniversary,
    homeScreen,
}) => {
    const maxAppsPerPage = rowsPerPage * MAX_APPS_PER_ROW;
    const numOfPages = rowsPerPage
        ? Math.ceil(apps.length / maxAppsPerPage)
        : 0;

    return {
        isMobile,
        apps,
        appSize,
        rowsPerPage,
        currentPage,
        numOfPages,
        maxAppsPerPage,
        activeApp,
        playground,
        anniversary,
        ...homeScreen,
    };
};

export const dispatches = {
    setAppSize,
    setRowsPerPage,
    setCurrentPage,
    setActiveApp,
    setNotification,
    updateScreen,
};
