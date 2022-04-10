import axios from "axios";

import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT,
USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } 
from "../types/userTypes";

export const login = (email, password) => async (dispatch) => {

    dispatch({type: USER_LOGIN_REQUEST})

    const config = {
        headers: {
            'Content-type':'application/json'
        }
    }

    axios.post('http://127.0.0.1:8000/api/users/login/', 
    {'username':email, 'password':password},
    config)
    .then((response) =>{

        const userData = response.data

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
                userData
            }
        })
        localStorage.setItem('userData', JSON.stringify(userData))
    })
    .catch((error) =>{

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data
        })
    })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userData')
    dispatch({ type: USER_LOGOUT })
}

export const register = (firstname, lastname, email, password) => async (dispatch) => {

    dispatch({type: USER_REGISTER_REQUEST})

    const config = {
        headers: {
            'Content-type':'application/json'
        }
    }

    axios.post('http://127.0.0.1:8000/api/users/register/', 
    { 'first_name': firstname, 'last_name':lastname, 'email': email, 'password': password },
    config)
    .then((response) =>{

        const userData = response.data
       
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userData
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userData
        })

        localStorage.setItem('userData', JSON.stringify(userData))
    })
    .catch((error) =>{

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data[0]
        })
    })
}
