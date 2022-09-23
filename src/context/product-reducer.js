
import { GET_CATEGORY, GET_CATEGORY_PRODUCT, ADD_TOD_CART } from './types';

export const ProductReducer = (state, action) => {
  // console.log("state reducer >>> ", state)
  switch (action.type) {
    case GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload
      }
    }
    case GET_CATEGORY_PRODUCT: {
      return {
        ...state,
        data: action.payload
      }
    }
    case ADD_TOD_CART: {
      const {id} = action;
      const {cart, data} = state;
      const element = data.find((elem) => elem.id === id);
      const newArr = [...cart, element];
      return {
        ...state,
        cart: newArr
      }
    }
    default:
      return state
  }
}

