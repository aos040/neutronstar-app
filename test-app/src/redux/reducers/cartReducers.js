import { CART_ADD, CART_REMOVE, CART_UPDATE_QTY, CART_CLEAR_ITEMS } from "../types/cartTypes";

const initialState = { cartItems: [], shippingAddress: {} }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            const new_item = action.payload
            const old_item = state.cartItems.find(item => item.id === new_item.id)

            if (old_item) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === old_item.id ? new_item : item)
                }
            } 
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, new_item]
                }
            }
        case CART_UPDATE_QTY:
            const updated_item = action.payload
            return {
                ...state, cartItems: state.cartItems.map((item)=>item.id === updated_item.id ? updated_item : item)
            }

        case CART_REMOVE:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case CART_CLEAR_ITEMS:
            return {...state, cartItems:[]}
        default:
            return state
    }
}
