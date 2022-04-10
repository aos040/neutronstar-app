import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'
import { uploadIcon } from '../redux/actions/footerActions'
import '../components/css/ProductCreateScreen.css'

export default function UploadIconScreen() {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

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
        formData.append('image', image)

        dispatch(uploadIcon(formData))
        history('/admin/upload/')
    }


    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='form-box'>
                <h4 style={{textAlign:'center'}}>Upload Icon Image</h4>
                <label>
                    Icon Name:
                    <input required type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'></input>
                </label>

                <label>
                    Icon image:
                    <input required onChange={(e)=>setImage(e.target.files[0])} className='img-field' type='file'></input>
                </label>
                <button className='sub-button' type='submit'>Upload Icon</button>
            </form>
        </div>
    )
}
