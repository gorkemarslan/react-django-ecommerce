import * as actionType from '../actions/userActionTypes';

export const userLoginReducer = (state={}, action) => {
    switch(action.type){
        case actionType.USER_SIGNIN_REQUEST:
            return {loading: true};
        case actionType.USER_SIGNIN_SUCCESS:
            return {
                loading: false, 
                user: action.payload
            };
        case actionType.USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case actionType.USER_SIGNOUT:
            return {};
        default:
            return state;
    }
}