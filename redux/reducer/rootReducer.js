import { combineReducers } from "redux";
import categorys from "./category";
import products from "./product";
import cart from "./cart";
import wishlist from "./wishlist";
import quickView from "./quickView";
import compare from "./compare";
import productFilters from "./productFilters";

const rootReducer = combineReducers({
  categorys,
  products,
  cart,
  wishlist,
  quickView,
  compare,
  productFilters,
});

export default rootReducer;
