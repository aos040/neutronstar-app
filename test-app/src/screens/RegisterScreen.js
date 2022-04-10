import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'
import { register } from '../redux/actions/userActions'
import '../components/css/Register.css'

export default function RegisterScreen() {

    const dispatch = useDispatch()
    const history = useNavigate()
    const {userData, error} = useSelector(state => state.userRegister)

    useEffect(()=>{

        dispatch({
            type: DEACTIVATE_SEARCH,
        })

        if (userData && Object.keys(userData).length != 0) {
            history('/')
        }

    },[dispatch, userData])


    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [match, setMatch] = useState(true)
    const [exists, setExists] = useState(false)
    
    const handleRegister = (e) =>{
        e.preventDefault();

        if (password1 === password2){
            setMatch(true)
            dispatch(register(firstname, lastname, email, password1))
            
            if (error){
                setExists(true)
                setTimeout(function(){ setExists(false); }, 8000);
            }
        }
        else{
            setMatch(false)
            setTimeout(function(){ setMatch(true); }, 8000);
        } 
    }

    return (
        <div className='register-container'>
            <div className='card round'>
                <div className='inner-box'>
                    <div className='from-cont'>
                        <h2>Create account</h2>
                        <form className='reg-form'>
                            <i class="fa-solid fa-user"></i>
                            <input type='text' required value={firstname} onChange={(e)=>setFirstName(e.target.value)} className='input-box' placeholder='Firstname'></input>
                            <i class="fa-solid fa-user"></i>
                            <input type='text' required value={lastname} onChange={(e)=>setLastName(e.target.value)} className='input-box' placeholder='Lastname'></input>
                            <i class="fa-solid fa-envelope"></i>
                            <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} className='input-box' placeholder='Email'></input>
                            <i class="fa-solid fa-lock"></i>
                            <input type='password' value={password1} onChange={(e)=>setPassword1(e.target.value)} required className='input-box' placeholder='Password'></input>
                            <input type='password' value={password2} onChange={(e)=>setPassword2(e.target.value)} required className='input-box' placeholder='Repeat Password'></input>
                            {match === false && <p style={{color:'red'}}>Passwords don't match</p>}
                            {exists && <p style={{color:'red'}}>{error}</p>}
                            <button onClick={handleRegister} type='submit' className='log-reg-btn form_btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
