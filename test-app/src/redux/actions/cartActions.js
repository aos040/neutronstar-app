
import axios from 'axios'
import {CART_ADD, CART_REMOVE, CART_UPDATE_QTY} from '../types/cartTypes'

export const addToCart = (id) => async (dispatch, getState) => {

    axios.get(`/api/product/${id}/`)
    .then((response) =>{

        const product = response.data
    
        dispatch({
            type: CART_ADD,
            payload: {
                id: product.id,
                name: product.name,
                images: product.image_urls,
                price: product.price,
                quantity: 1,
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    })
    .then((error) =>{
        
    })
}

const updateQuantity = (id, quantity) => async (dispatch, getState) => {

    axios.get(`/api/product/${id}/`)
    .then((response) =>{

        const product = response.data
        
        dispatch({
            type: CART_UPDATE_QTY,
            payload: {
                id: product.id,
                name: product.name,
                images: product.image_urls,
                price: product.price,
                quantity: quantity,
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    })
    .then((error) =>{
        
    })
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export default updateQuantity;