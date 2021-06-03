import { combineReducers } from "redux";
import wipgets from "./Wipgets";
import banners from "./Banner";
import categoryProducts from "./CategoryProducts";
import searchProducts from "./SearchProduct";
import products from "./Products";
const myReducer = combineReducers({
  wipgets: wipgets,
  banners: banners,
  categoryProducts: categoryProducts,
  searchProducts: searchProducts,
  products: products
});
export default myReducer;
