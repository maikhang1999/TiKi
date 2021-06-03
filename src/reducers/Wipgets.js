import * as types from "./../constants/ActionTypes";
import { Wipgets_List } from "../data";
var initState = Wipgets_List ? Wipgets_List : [];

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_WIPGETS:
      return state;
    default:
      return state;
  }
  return state;
};
export default myReducer;
