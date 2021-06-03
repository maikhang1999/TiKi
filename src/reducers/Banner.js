import * as types from "./../constants/ActionTypes";
import { Banners_List } from "../data";
var initState = Banners_List ? Banners_List : [];

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_BANNERS:
      return state;
    default:
      return state;
  }
  return state;
};
export default myReducer;
