import { MAX_APPS_PER_ROW } from "../../../../configs/constants";
import {
    setAppSize,
    setCurrentPage,
    setRowsPerPage,
    setActiveApp,
} from "./actions";

import {
    updateScreen,
} from '../../../Screen/redux/actions';

export const states = ({
    apps,
    appSize,
    rowsPerPage,
    currentPage,
    activeApp,
    playground,
    anniversary,
}) => {
    const maxAppsPerPage = rowsPerPage * MAX_APPS_PER_ROW;
    const numOfPages = rowsPerPage
        ? Math.ceil(apps.length / maxAppsPerPage)
        : 0;

    return {
        apps,
        appSize,
        rowsPerPage,
        currentPage,
        numOfPages,
        maxAppsPerPage,
        activeApp,
        playground,
        anniversary,
    };
};

export const dispatches = {
    setAppSize,
    setRowsPerPage,
    setCurrentPage,
    setActiveApp,
    updateScreen,
};
