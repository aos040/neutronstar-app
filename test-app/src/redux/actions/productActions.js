import { 
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL
 } from '../types/productTypes'

import axios from 'axios'
/* Function returns another function which is an action that
 will be passed to a dipatch.
 
 The returned function makes call to database, and dispatches action to "productListReducer"
  so that the reducer alter its sub-state in redux store.

  NB: diaptch takes an action which is either an object or a function.
  Incase it is an object, it opens the object and looks for attribute named type, 

  if the value stored in type attribute is for example = "FETCH_PRODUCT_LIST_SUCCESS",
  It iterates over all reducers and looks for a reducers that has its switch case === "FETCH_PRODUCT_LIST_SUCCESS",
  if they match, it will dispatch this reducer.

 */


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(`/api/products/`)
      
        dispatch({
            type: FETCH_PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FETCH_PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ProductDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/product/${id}/`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createProduct = (product) => async (dispatch, getState) => {

 
    dispatch({
        type: PRODUCT_CREATE_REQUEST
    })

    const {
        userLogin: { userData },
    } = getState()

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userData.token}`
        }
    }

    await axios.post(
        `/api/admin/create/`,
        product,
        config
    )
    .then(response=>{
        const data = response.data
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })
    })
    .catch (error =>{
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response
        })
    })

}

