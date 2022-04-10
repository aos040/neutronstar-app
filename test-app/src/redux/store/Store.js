import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk'
import {rootReducer} from '../reducers/rootReducer'

/* Array of middlewares*/
const middleware = [thunk]

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userDataFromStorage = localStorage.getItem('userData') ?
    JSON.parse(localStorage.getItem('userData')) : {}

// Data is a array of objects sent from Bring posten, each object is a pickup point.
const pickUpDataFromStorage = localStorage.getItem('data') ?
    JSON.parse(localStorage.getItem('data')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : null

const initialState = {
  cart: {cartItems: cartItemsFromStorage},
  userLogin: {userData: userDataFromStorage},
  pickUpPoints: {data: pickUpDataFromStorage, shippingAddress:shippingAddressFromStorage}, 
}

/* Store all reducer's sub-stores */
export const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware)
));