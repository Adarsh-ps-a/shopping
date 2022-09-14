import { combineReducers } from "redux";
import getCategoryReducer from "./getCategoryReducer";
import getProductList from "./getProductList";
import getProductReducer from "./getProductReducer";
import getCartReducer from "./productCartReducer";

export default combineReducers({
  getCategoryReducer,
  getProductList,
  getProductReducer,
  getCartReducer,
});
