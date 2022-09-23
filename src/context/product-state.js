import { useReducer } from 'react'
import { MyContext } from './my-context'
import { ProductReducer } from './product-reducer'
import {
  GET_CATEGORY,
  GET_CATEGORY_PRODUCT,
  ADD_TOD_CART
} from './types'

export const ProductState = ({ children }) => {
  const initialState = {
    data: [],
    cart: [],
    categories: [],
    loading: false,
    error: null,
  }
  const [state, dispatch] = useReducer(ProductReducer, initialState)
  const getCategoryState = (data) => dispatch({ type: GET_CATEGORY, payload: data })
  const getCategoryProduct = (data) => dispatch({ type: GET_CATEGORY_PRODUCT, payload: data })
  const addToCart = (id) => dispatch({ type: ADD_TOD_CART, id })
  
  return (
    <MyContext.Provider value={{
      data: state.data,
      cart: state.cart,
      loading: state.loading,
      error: state.error,
      categories: state.categories,
      getCategoryState,
      getCategoryProduct,
      addToCart
    }}>
      {children}
    </MyContext.Provider>
  )
}