import * as types from "./../constants/ActionTypes";
import { ProductList } from "../data";
var initState = ProductList ? ProductList : [];

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_PRODUCTS:
      return state;
    default:
      return state;
  }
  return state;
};
export default myReducer;
