
import { PICKUP_POINTS_REQUEST, PICKUP_POINTS_SUCCESS, PICKUP_POINTS_FAIL, SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from "../types/pickUpPointTypes"

export const PickUpPointReducer = (state = {loading: false, data:[], shippingAddress:{}, paymentMethod:'', error:''}, action) => {
    
    switch(action.type){
        case PICKUP_POINTS_REQUEST:
            return {...state, loading:true, error:''}
        case PICKUP_POINTS_SUCCESS:
            return {loading:false, data:action.payload.data, error:''}
        case PICKUP_POINTS_FAIL:
            return {...state, loading:false, data:[], error:action.payload}
        case SAVE_SHIPPING_ADDRESS:
            return {...state, shippingAddress:action.payload}
        case SAVE_PAYMENT_METHOD:
            console.log("Payment method payload:", action.payload)
            console.log("Pre state:", state)
            const updated_state = {...state, paymentMethod:action.payload}
            console.log("Updated state:", updated_state)
            return updated_state
        default:
            return state
    }
}
    
