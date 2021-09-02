import * as actionType from '../actions/userActionTypes';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    dispatch({
        type: actionType.USER_SIGNIN_REQUEST,
        payload: {email, password}
    });
    try {
        const {data} = await axios.post('/api/auth/token/obtain/', {email, password});
        dispatch({
            type: actionType.USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionType.USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');
    dispatch({
        type: actionType.USER_SIGNOUT
    });
}