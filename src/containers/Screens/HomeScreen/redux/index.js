import { MAX_APPS_PER_ROW } from "../../../../configs/constants";
import {
    setAppSize,
    setCurrentPage,
    setRowsPerPage,
    setActiveApp,
    setPlaygroundInfo,
    setDescription,
} from "./actions";

export const states = ({
    apps,
    appSize,
    rowsPerPage,
    currentPage,
    activeApp,
    playground,
    description,
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
        description,
    };
};

export const dispatches = {
    setAppSize,
    setRowsPerPage,
    setCurrentPage,
    setActiveApp,
    setPlaygroundInfo,
    setDescription,
};
