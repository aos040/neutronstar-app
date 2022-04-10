import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes';
import ProductAdmin from '../components/js/ProductAdmin';
import { listProducts } from '../redux/actions/productActions';
import '../components/css/Utilities.css'
import '../components/css/ProductsScreenAdmin.css'
import Button from '../components/js/Button';

export default function ProductsScreenAdmin({item}) {

    const history = useNavigate()
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {loading, products} = productList

    const userLogin = useSelector(state => state.userLogin)
    const { userData } = userLogin

    useEffect(()=>{
        
        dispatch({
            type: DEACTIVATE_SEARCH,
        })

        if (!userData.is_staff) {
            history('/')
        }

        if (loading === false && products.length===0){
            dispatch(listProducts())
        }
    },[dispatch])

    const createProductHandler = () =>{
        history('/admin/products/create/')
    }

    return (
        <div className='box-parent'>
            <Button clickHandler={createProductHandler}>Create product</Button>
           {products.length > 0 ? 
            <div className='box-child'> {products.map((product)=> <ProductAdmin item={product}/>)} </div>
            : ''}
        </div>
  
    )
}
