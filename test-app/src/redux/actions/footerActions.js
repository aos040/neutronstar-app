import axios from 'axios'
import {
    EXCLUSIVE_REQUEST,
    EXCLUSIVE_SUCCESS,
    EXCLUSIVE_FAIL, 
    
    PAYMENT_METHOD_REQUEST,
    PAYMENT_METHOD_SUCCESS, 
    PAYMENT_METHOD_FAIL,

    SOCIAL_MEDIA_REQUEST,
    SOCIAL_MEDIA_SUCCESS,
    SOCIAL_MEDIA_FAIL,

    COMMENT_REQUEST,
    COMMENT_SUCCESS,
    COMMENT_FAIL,

    MOBILE_STORE_REQUEST,
    MOBILE_STORE_SUCCESS,
    MOBILE_STORE_FAIL,

    COVER_IMAGE_REQUEST,
    COVER_IMAGE_SUCCESS,
    COVER_IMAGE_FAIL,

    ICON_IMAGE_REQUEST,
    ICON_IMAGE_SUCCESS,
    ICON_IMAGE_FAIL,

    STATIC_DATA_REQUEST,
    STATIC_DATA_SUCCESS,
    STATIC_DATA_FAIL,

    TOKEN_UPLOAD_REQUEST,
    TOKEN_UPLOAD_SUCCESS,
    TOKEN_UPLOAD_FAIL,

    TOKEN_DELETE_REQUEST,
    TOKEN_DELETE_SUCCESS,
    TOKEN_DELETE_FAIL
} from '../types/footerTypes'


export const uploadExclusive = (exclusive) => async (dispatch, getState) => {
    try {

        dispatch({type: EXCLUSIVE_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadexclusive/`,
            exclusive,
            config
        )
        dispatch({
            type: EXCLUSIVE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: EXCLUSIVE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const uploadPaymentMethods = (paymentMethods) => async (dispatch, getState) => {
    try {

        dispatch({type: PAYMENT_METHOD_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadpayment/`,
            paymentMethods,
            config
        )
        dispatch({
            type: PAYMENT_METHOD_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PAYMENT_METHOD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const uploadSocialMedia = (media) => async (dispatch, getState) => {
    try {

        dispatch({type: SOCIAL_MEDIA_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadmedia/`,
            media,
            config
        )
        dispatch({
            type: SOCIAL_MEDIA_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: SOCIAL_MEDIA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const uploadComment = (comment) => async (dispatch, getState) => {
    try {

        dispatch({type: COMMENT_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadreview/`,
            comment,
            config
        )
        dispatch({
            type: COMMENT_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: COMMENT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const uploadAppStore = (store) => async (dispatch, getState) => {
    try {

        dispatch({type: MOBILE_STORE_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadstore/`,
            store,
            config
        )
        dispatch({
            type: MOBILE_STORE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: MOBILE_STORE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const uploadCover = (cover) => async (dispatch, getState) => {
    try {

        dispatch({type: COVER_IMAGE_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadcover/`,
            cover,
            config
        )
        dispatch({
            type: COVER_IMAGE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: COVER_IMAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const uploadIcon = (icon) => async (dispatch, getState) => {
    try {

        dispatch({type: ICON_IMAGE_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadicon/`,
            icon,
            config
        )
        dispatch({
            type: ICON_IMAGE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: ICON_IMAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const uploadToken = (token) => async (dispatch, getState) => {
    try {

        dispatch({type: TOKEN_UPLOAD_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.post(
            `/api/admin/uploadtoken/`,
            token,
            config
        )
        dispatch({
            type: TOKEN_UPLOAD_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: TOKEN_UPLOAD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const deleteToken = (token) => async (dispatch, getState) => {
    try {

        dispatch({type: TOKEN_DELETE_REQUEST})

        const {
            userLogin: { userData },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/admin/deletetoken/`,
            token,
            config
        )
        dispatch({
            type: TOKEN_DELETE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: TOKEN_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getStaticData = () => async (dispatch) => {
    try {

        dispatch({type: STATIC_DATA_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `/api/static/`,
            config
        )

        dispatch({
            type: STATIC_DATA_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: STATIC_DATA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

