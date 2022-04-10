import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes';
import {login} from '../redux/actions/userActions'
import '../components/css/Login.css'

export default function LogInScreen({}) {

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    const dispatch = useDispatch()
    const history = useNavigate()

 
    useEffect(()=>{

        dispatch({
            type: DEACTIVATE_SEARCH,
        })

        if (userData && Object.keys(userData).length != 0) {
            history('/')
        }
    },[dispatch, userData])


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit= (e) =>{
        e.preventDefault();
        if (email || password === ''){
            dispatch(login(email, password))
        }
    }

    return (
    <div className='login-container'>
        <div className='card'>
            <div className='inner-box'>
                <div className='card-front'>
                    <h2>Login</h2>
                    <form className='log-form'>
                        <i class="fa-solid fa-envelope"></i>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required className='input-box' placeholder='Email'></input>
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required className='input-box' placeholder='Password'></input>
                        <button type='submit' onClick={handleSubmit} className='form_btn log-reg-btn'>Submit</button>
                    </form>
                    <Link to='/register'>
                        <button type='button' className='form_btn log-reg-btn'>Don't Have Account?</button>
                    </Link>
                    <a href='#'>Forgot Password</a>
                </div>
            </div>
        </div>
    </div>
    )
}
