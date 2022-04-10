import { PICKUP_POINTS_REQUEST, PICKUP_POINTS_SUCCESS, PICKUP_POINTS_FAIL, SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from "../types/pickUpPointTypes"
import axios from "axios"

export const getPickUpPoints = (postCode, staticData) => async (dispatch) => {

    const {tokens} = staticData
    const bringToken = tokens.filter((token)=>token.name==='BringLocations')

    dispatch({type: PICKUP_POINTS_REQUEST})

    const config = {
        headers: {
            'Content-type':'application/json',
            'X-Mybring-API-Key': `${bringToken[0].token}`,
            'X-Mybring-API-Uid': 'abdimalik551@gmail.com'
        }
    }
    await axios.get(`https://api.bring.com/pickuppoint/api/pickuppoint/no/postalCode/${postCode}.json`,
    config)
    .then((response) =>{

        const data = response.data.pickupPoint
    
        dispatch({
            type: PICKUP_POINTS_SUCCESS,
            payload: {
                data
            }
        })
        localStorage.setItem('data', JSON.stringify(data))
    })
    .catch((error) =>{

        dispatch({
            type: PICKUP_POINTS_FAIL,
            payload: error.response.data
        })
    })
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {

    console.log("Dsipatching payment method data:", data)
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}