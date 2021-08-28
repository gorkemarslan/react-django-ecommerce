import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as productReducers from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productReducers.productListReducer,
  productDetail: productReducers.productDetailReducer,
  /*productDelete: productReducers.productDeleteReducer,
  productCreate: productReducers.productCreateReducer,
  productUpdate: productReducers.productUpdateReducer,
  productReviewCreate: productReducers.productReviewCreateReducer,
  productTopRated: productReducers.productTopRatedReducer*/
});
const initialState = {};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;