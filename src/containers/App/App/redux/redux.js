import {
    setIsMobile
} from '../redux/actions';

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
};