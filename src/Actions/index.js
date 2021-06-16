import * as types from "./../constants/ActionTypes";
import axios from 'axios'
export const showWipgets = () => {
  return {
    type: types.SHOW_WIPGETS
  };
};
export const showBanners = () => {
  return {
    type: types.SHOW_BANNERS
  };
};
export const showCategoryProducts = () => {
  return {
    type: types.SHOW_CATEGORYPRODUCTS
  };
};
export const showSearchProduct = () => {
  return {
    type: types.SHOW_SEARCHPRODUCT
  };
};
export const showProducts = () => async dispatch =>{

  try{
    const response = await axios.get('http://localhost:3000/products?_limit=10')
    dispatch({
      type:types.SHOW_PRODUCTS,
      payload:response.data
    })
  }
  catch (error){
    console.log(error);
  }
  
}
export const getProduct = (id) => async dispatch =>{

  try{
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(response);
    dispatch({
      type:types.GET_PRODUCT,
      payload:response.data
    })
  }
  catch (error){
    console.log(error);
  }
  
}

export const showMoreProducts = (page) => async dispatch =>{
  try{
    const response = await axios.get(`http://localhost:3000/products?_page=${page}&_limit=10`)
    dispatch({
      type:types.SHOW_MOREPRODUCTS,
      payload:response.data
    })
  }
  catch (error){
    console.log(error);
  }
}