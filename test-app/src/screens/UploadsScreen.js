import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/js/Button'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'


export default function UploadsScreen() {

    const history = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    useEffect(()=>{

        if(!userData.is_staff && userData.email !== 'abdimalik551@gmail.com'){
          history('/')
        }

        dispatch({type: DEACTIVATE_SEARCH})
        
    },[dispatch])

    const exclusiveHandler = () =>{
        history('/admin/uploadexclusive/')
    }
    const commentsHandler = () =>{
        history('/admin/uploadcomments/')
    }
    const socialMediaHandler = () => {
        history('/admin/uploadmedia/')
    }
    const paymentHandler = () => {
        history('/admin/uploadpayment/')
    }
    const storeHandler = () => {
        history('/admin/uploadstore/')
    }
    const coverHandler = () => {
        history('/admin/uploadcover/')
    }
    const iconHandler = () => {
        history('/admin/uploadicon/')
    }
    const tokenUploadHandler = () => {
        history('/admin/uploadtoken/')
    }

    const tokenDeleteHandler = () => {
        history('/admin/deletetoken/')
    }
    
  return (
    <div className='upscreen'>
        <div className='upbtn'>
            <Button clickHandler={exclusiveHandler}>Upload Exclusive</Button>
            <Button clickHandler={commentsHandler}>Upload Comments</Button>
            <Button clickHandler={socialMediaHandler}>Upload Social Media</Button>
            <Button clickHandler={paymentHandler}>Upload Payments Method</Button>
            <Button clickHandler={storeHandler}>Upload Mobile Store</Button>
            <Button clickHandler={coverHandler}>Upload Cover Image</Button>
            <Button clickHandler={iconHandler}>Upload Icon Image</Button>
            <Button clickHandler={tokenUploadHandler}>Upload Token</Button>
            <Button clickHandler={tokenDeleteHandler}>Delete Token</Button>
        </div>
    </div>
  )
}
