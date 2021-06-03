import * as types from "./../constants/ActionTypes";
import { CategoryProduct_List } from "../data";
var initState = CategoryProduct_List ? CategoryProduct_List : [];

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_CATEGORYPRODUCTS:
      return state;
    default:
      return state;
  }
  return state;
};
export default myReducer;
