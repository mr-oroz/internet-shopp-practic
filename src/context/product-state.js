import { useReducer } from 'react'
import { MyContext } from './my-context'
import {ProductReducer} from './product-reducer'
import { GET_CATEGORY } from './types'

export const ProductState = ({ children }) => {
    const initialState = {
        data: [],
        cart: [],
        categories: [],
        loading: false,
        error: null,
    }
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const getCategory = (data) => dispatch({type: GET_CATEGORY, payload: data})
    return (
        <MyContext.Provider value={{
            data: state.data,
            cart: state.cart,
            loading: state.loading,
            error: state.error,
            categories: state.categories,
            getCategory
        }}>
            {children}
        </MyContext.Provider>
    )
}