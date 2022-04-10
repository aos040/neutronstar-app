import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'
import { uploadExclusive } from '../redux/actions/footerActions'

import '../components/css/ProductCreateScreen.css'

export default function UploadExclusiveScreen() {

    const dispatch = useDispatch()
    const history = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')

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

        formData.append('title', title)
        formData.append('description', description)

        formData.append('image1', image1)
        formData.append('image2', image2)

        dispatch(uploadExclusive(formData))
        history('/admin/upload/')
    }


    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='form-box'>
                <h4 style={{textAlign:'center'}}>Upload Exlusive Product</h4>
                <label>
                    Exlusive title:
                    <input required type='text'  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'></input>
                </label>

                <label>
                    Exclusive Description:
                    <textarea required value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
                </label>

                <label>
                    Eclusive image1:
                    <input required onChange={(e)=>setImage1(e.target.files[0])} className='img-field' type='file'></input>
                </label>
                <label>
                    Eclusive image2:
                    <input required onChange={(e)=>setImage2(e.target.files[0])} className='img-field' type='file'></input>
                </label>
                <button className='sub-button' type='submit'>Upload Exclusive</button>
            </form>
        </div>
    )
}
