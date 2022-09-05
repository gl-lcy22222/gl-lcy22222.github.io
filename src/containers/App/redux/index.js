import {
    setIsMobile
} from './actions';
import {
    setApps
} from '../../Screens/HomeScreen/redux/actions';

export const states = ({
    volume,
    isMobile
}) => {
    return {
        volume,
        isMobile,
    };
};

export const dispatches = {
    setIsMobile,
    setApps,
};