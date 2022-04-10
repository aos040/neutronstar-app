import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes';
import { createProduct } from '../redux/actions/productActions';
import '../components/css/ProductCreateScreen.css'


export default function ProductCreateScreen() {


    const history = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userData } = userLogin

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [discount, setDiscount] = useState('')
    const [quantityInStock, setQuantityInStock] = useState('')

    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')

    useEffect(()=>{
        
        dispatch({
            type: DEACTIVATE_SEARCH,
        })

        if (!userData.is_staff) {
            history('/')
        }

    },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('category', category)
        formData.append('price', price)
        formData.append('discount', discount)
        formData.append('quantityInStock', quantityInStock)
        formData.append('description', description)

        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.append('image4', image4)

        dispatch(createProduct(formData))
    }
 

    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} className='form-box'>
                <label>
                    Name:
                    <input required type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'></input>
                </label>

                <label>
                    Category:
                    <input required type='text' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Category'></input>
                </label>
                <label>
                    Image 1:
                    <input required className='img-field' type='file' onChange={(e)=>setImage1(e.target.files[0])}></input>
                </label>
                <label>
                    Image 2:
                    <input required className='img-field' type='file' onChange={(e)=>setImage2(e.target.files[0])}></input>
                </label>
                <label>
                    Image 3:
                    <input required className='img-field' type='file' onChange={(e)=>setImage3(e.target.files[0])}></input>
                </label>
                <label>
                    Image 4:
                    <input required className='img-field' type='file' onChange={(e)=>setImage4(e.target.files[0])}></input>
                </label>
                <label>
                    Price:
                    <input required type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price'></input>
                </label>
                <label>
                    Discount:
                    <input required type='number' value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder='Discount'></input>
                </label>
                <label>
                    Quantity:
                    <input required type='number' value={quantityInStock} onChange={(e)=>setQuantityInStock(e.target.value)} placeholder='Quantity'></input>
                </label>
                <label>
                    Description:
                    <textarea required value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
                </label>
                <button className='sub-button' type='submit'>Create product</button>
            </form>
        </div>
  )
}
