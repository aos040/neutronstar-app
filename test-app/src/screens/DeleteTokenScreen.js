import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'
import { deleteToken } from '../redux/actions/footerActions'
import '../components/css/ProductCreateScreen.css'

export default function DeleteTokenScreen() {

    const dispatch = useDispatch()
    const history = useNavigate()

    const [name, setName] = useState('')
    const [token, setToken] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    useEffect(()=>{

        if(!userData.is_staff && userData.email !== 'abdimalik551@gmail.com'){
          history('/')
        }

        dispatch({type: DEACTIVATE_SEARCH})
        
    },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('token', token)

        dispatch(deleteToken(formData))
        history('/admin/upload/')
    }


    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='form-box'>
                <h4 style={{textAlign:'center'}}>Delete Token</h4>
                <label>
                    Token Name:
                    <input required type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'></input>
                </label>
                <label>
                    Token:
                    <input required type='text' value={token} onChange={(e)=>setToken(e.target.value)} placeholder='Token'></input>
                </label>
                <button className='sub-button' type='submit'>Delete Token</button>
            </form>
        </div>
    )


}
