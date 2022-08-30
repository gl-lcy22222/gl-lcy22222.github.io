import { mobileAndTabletCheck } from '../actions';
import { SET_IS_MOBILE } from './types';

export const setIsMobile = () => ({
    type: SET_IS_MOBILE,
    isMobile: mobileAndTabletCheck(),
});