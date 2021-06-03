import * as types from "./../constants/ActionTypes";
import { ProductSearchList } from "../data";
var initState = ProductSearchList ? ProductSearchList : [];

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_SEARCHPRODUCT:
      return state;
    default:
      return state;
  }
  return state;
};
export default myReducer;
