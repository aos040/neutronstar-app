import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { uploadComment } from '../redux/actions/footerActions'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'
import '../components/css/ProductCreateScreen.css'


export default function UploadCommentsScreen() {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
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
        formData.append('comment', comment)
        formData.append('image', image)

        dispatch(uploadComment(formData))
        history('/admin/upload/')
    }


    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='form-box'>
                <h4 style={{textAlign:'center'}}>Upload Comment</h4>
                <label>
                    User name:
                    <input required type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'></input>
                </label>

                <label>
                    User image:
                    <input required onChange={(e)=>setImage(e.target.files[0])} className='img-field' type='file'></input>
                </label>

                <label>
                    Comment:
                    <textarea required value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='Description' />
                </label>
                <button className='sub-button' type='submit'>Upload Comment</button>
            </form>
        </div>
    )
}
