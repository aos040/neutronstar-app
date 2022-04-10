import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { searchReducer } from './searchReducers';
import { userLoginReducer } from './userReducers';
import { userRegisterReducer } from './userReducers';
import { cartReducer } from './cartReducers'
import { productCreateReducer } from './productReducers';
import { PickUpPointReducer } from './pickUpPointReducers';

import { exclusiveUploadReducer } from './footerReducers';
import { paymentUploadReducer } from './footerReducers';
import { socialMediaUploadReducer } from './footerReducers';
import { commentUploadReducer } from './footerReducers';
import { mobileStoreUploadReducer } from './footerReducers';
import { coverImageUploadReducer } from './footerReducers';
import { iconImageUploadReducer } from './footerReducers';
import { tokenUploadReducer } from './footerReducers';
import { tokenDeleteReducer } from './footerReducers';
import { staticDataReducer } from './footerReducers';


export const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    search: searchReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productCreate: productCreateReducer,
    pickUpPoints: PickUpPointReducer,

    exclusive: exclusiveUploadReducer,
    payment: paymentUploadReducer,
    social: socialMediaUploadReducer,
    comment: commentUploadReducer,
    store: mobileStoreUploadReducer,
    cover: coverImageUploadReducer,
    icon: iconImageUploadReducer,
    statics: staticDataReducer,
    uploadToken: tokenUploadReducer,
    delToken: tokenDeleteReducer
});
