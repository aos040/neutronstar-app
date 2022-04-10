import { 
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    UPDATE_MAIN_URL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET
 } from '../types/productTypes'


/* 
    A reducer is a pure function that takes an action and the previous state of the application 
    and returns the new state. The action describes what happened and it is the reducer's job 
    to return the new state based on that action.
 */

const initialState1 = {loading: false, products: [], exclusive: [], exclusive_image: [], error: ''}

export const productListReducer = (state = initialState1, action) => {

    switch(action.type){
        case FETCH_PRODUCT_LIST_REQUEST:
            const new_state = {...state, loading: true}
            return new_state
            
        case FETCH_PRODUCT_LIST_SUCCESS:
            const new_state2 = {loading: false, error:'', products: action.payload.products, exclusive: action.payload.exclusive, exclusive_image:action.payload.exclusive_image}
            return new_state2

        case FETCH_PRODUCT_LIST_FAIL:
          
            const new_state3 = {loading: false, products: [], error:action.payload}
            return new_state3

        default:
            return state;
    }
}

const initialState2 = { loading: true, product:[], description:[], image_urls:[], main_url: '', error:''}
export const productDetailsReducer = (state = initialState2, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
          
            return { loading: false, product: [action.payload], description:action.payload.description.split("\n"), image_urls: action.payload.image_urls, main_url:action.payload.image_urls[0].image}

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        
        case UPDATE_MAIN_URL:
            return {...state, main_url:action.payload}

        default:
            return state
    }
}

export const productCreateReducer = (state = {loading:false, success:false, error:'', product:[]}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
    }
}