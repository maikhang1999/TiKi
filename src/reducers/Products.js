import { Satellite } from "@material-ui/icons";
import * as types from "./../constants/ActionTypes";
var initState = {
  ProductList:[],
  Product:null,
}

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_PRODUCTS:
      return {
        ...state,
        ProductList:action.payload
      }
    case types.GET_PRODUCT:
      return {
        ...state,
        Product:action.payload
      }
    case types.SHOW_MOREPRODUCTS:
      return {
        ...state,
        ProductList: [...state.ProductList].concat(action.payload)
        
      }
    default:
      return state;
  }
};
export default myReducer;
