import * as actionType from '../actions/productActionTypes';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    dispatch({type: actionType.PRODUCT_LIST_REQUEST})
    try {
        const {data} = await axios.get('/api/products/')
        dispatch({
            type: actionType.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionType.PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}

export const singleProduct = (productId) => async (dispatch) => {
    dispatch({type: actionType.PRODUCT_DETAILS_REQUEST})
    try {
        const {data} = await axios.get(`/api/products/${productId}/`)
        dispatch({
            type: actionType.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionType.PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}