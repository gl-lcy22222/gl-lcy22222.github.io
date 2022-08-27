import { SET_IS_MOBILE } from '../../../../configs/redux-types'; 
import { mobileAndTabletCheck } from '../../actions';

export const setIsMobile = () => ({
    type: SET_IS_MOBILE,
    isMobile: mobileAndTabletCheck(),
});