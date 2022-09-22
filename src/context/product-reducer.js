
import { GET_CATEGORY } from './types';

export const ProductReducer = (state, action) => {
        console.log(action)
        switch (action.type) {
                case GET_CATEGORY:
                        return {
                                ...state,
                                categories: action.payload
                        }
                default: 
                        return state
        }
}

