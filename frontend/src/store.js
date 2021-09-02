import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as productReducers from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import * as userReducers from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productReducers.productListReducer,
  productDetail: productReducers.productDetailReducer,
  cart: cartReducer,
  userLogin: userReducers.userLoginReducer
});
const initialState = {
  userLogin: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  },
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  }
};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
