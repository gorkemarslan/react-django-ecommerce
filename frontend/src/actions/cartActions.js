import axios from "axios"
import * as actionType from './cartActionTypes';

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: actionType.CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            product: data.id,
            quantity
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({
        type: actionType.CART_REMOVE_ITEM,
        payload: productId
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}