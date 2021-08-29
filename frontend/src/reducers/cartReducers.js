import * as actionType from '../actions/cartActionTypes';

export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type){
        case actionType.CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(cartItem => cartItem.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionType.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        default:
            return state;
    }

}