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


export const exclusiveUploadReducer = (state = {loading:false, success:false, error:'', exclusiveData:[]}, action) => {
    switch (action.type) {
        case EXCLUSIVE_REQUEST:
            return { loading: true }

        case EXCLUSIVE_SUCCESS:
            return { loading: false, success: true, exclusiveData: action.payload }

        case EXCLUSIVE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const paymentUploadReducer = (state = {loading:false, success:false, error:'', paymentData:[]}, action) => {
    switch (action.type) {
        case PAYMENT_METHOD_REQUEST:
            return { loading: true }

        case PAYMENT_METHOD_SUCCESS:
            return { loading: false, success: true, paymentData: action.payload }

        case PAYMENT_METHOD_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const socialMediaUploadReducer = (state = {loading:false, success:false, error:'', mediaData:[]}, action) => {
    switch (action.type) {
        case SOCIAL_MEDIA_REQUEST:
            return { loading: true }

        case SOCIAL_MEDIA_SUCCESS:
            return { loading: false, success: true, mediaData: action.payload }

        case SOCIAL_MEDIA_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const commentUploadReducer = (state = {loading:false, success:false, error:'', commentData:[]}, action) => {
    switch (action.type) {
        case COMMENT_REQUEST:
            return { loading: true }

        case COMMENT_SUCCESS:
            return { loading: false, success: true, commentData: action.payload }

        case COMMENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const mobileStoreUploadReducer = (state = {loading:false, success:false, error:'', storeData:[]}, action) => {
    switch (action.type) {
        case MOBILE_STORE_REQUEST:
            return { loading: true }

        case MOBILE_STORE_SUCCESS:
            return { loading: false, success: true, storeData: action.payload }

        case MOBILE_STORE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const coverImageUploadReducer = (state = {loading:false, success:false, error:'', coverData:[]}, action) => {
    switch (action.type) {
        case COVER_IMAGE_REQUEST:
            return { loading: true }

        case COVER_IMAGE_SUCCESS:
            return { loading: false, success: true, coverData: action.payload }

        case COVER_IMAGE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const iconImageUploadReducer = (state = {loading:false, success:false, error:'', iconData:[]}, action) => {
    switch (action.type) {
        case ICON_IMAGE_REQUEST:
            return { loading: true }

        case ICON_IMAGE_SUCCESS:
            return { loading: false, success: true, iconData: action.payload }

        case ICON_IMAGE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const tokenUploadReducer = (state = {loading:false, success:false, error:'', tokenData:[]}, action) => {
    switch (action.type) {
        case TOKEN_UPLOAD_REQUEST:
            return { loading: true }

        case TOKEN_UPLOAD_SUCCESS:
            return { loading: false, success: true, tokenData: action.payload }

        case TOKEN_UPLOAD_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const tokenDeleteReducer = (state = {loading:false, success:false, error:'', tokenData:[]}, action) => {
    switch (action.type) {
        case TOKEN_DELETE_REQUEST:
            return { loading: true }

        case TOKEN_DELETE_SUCCESS:
            return { loading: false, success: true, tokenData: action.payload }

        case TOKEN_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const staticDataReducer = (state = {loading:false, success:false, error:'', staticData:{}}, action) => {
    switch (action.type) {
        case STATIC_DATA_REQUEST:
            return { loading: true }

        case STATIC_DATA_SUCCESS:
            return { loading: false, success: true, staticData: action.payload }

        case STATIC_DATA_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}