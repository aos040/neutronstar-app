import React from 'react'
import {useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect } from 'react'

import { ProductDetailsAction } from '../redux/actions/productActions'

import { UPDATE_MAIN_URL } from '../redux/types/productTypes'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'

import '../components/css/Utilities.css'
import '../components/css/productDetails.css'

import Button from '../components/js/Button'

export default function ProductScreen({match}) {

  const dispatch = useDispatch()
  
  const { id } = useParams();
  const history = useNavigate()

  const product_details = useSelector((state) => state.productDetails)
  const {loading, product, description, image_urls, main_url, error} = product_details

  useEffect(()=>{

    /* fetchProductList returns a function action and is passed to dispatch */
    dispatch({
      type: DEACTIVATE_SEARCH,
    })
    
    dispatch(ProductDetailsAction(Number(id)))

  },[dispatch, loading, id])


  const updateMain_Url = (index) =>{
    dispatch({
      type: UPDATE_MAIN_URL,
      payload: `${image_urls[index].image}`
    })
  }

  const addToCart = (e)=> {
    e.preventDefault();
    history(`/cart/${id}`);
  }

  return (

    <section className='details-container section'>

      {loading ? <h1>Loading</h1> : error ? <h1>error</h1> :

        // Grid
        <div className='detail-grid'>
        
          <div className='product-pictures'>

            <div className='sub-pics'>
              <img onClick={()=>{updateMain_Url(0)}} src={`${image_urls[0].image}`}></img>
              <img onClick={()=>{updateMain_Url(1)}} src={`${image_urls[1].image}`}></img>
              <img onClick={()=>{updateMain_Url(2)}} src={`${image_urls[2].image}`}></img>
              <img onClick={()=>{updateMain_Url(3)}} src={`${image_urls[3].image}`}></img>
            </div>
    
            <div className='main-pic'>
              <img src={`${main_url}`}></img>
            </div>

          </div>

          <div className='product-text'>

            <h1 className='name'>{product[0].name}</h1>
            <div className='rating'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div className='price-quantity-container'>
              <h5 className='sum'>Price: {product[0].price} kr</h5>
              <h5 className='quantity'>Quantity in stock: {product[0].quantityInStock}</h5>
            </div>

            <div className='description-container'>
              <h5 className='description'>Product description</h5>
              {description.map((detail)=><p>{detail}</p>)}
            </div>
      
            <Button clickHandler={addToCart}>Add to cart</Button>
          </div>

        </div>

      }
    </section>
  )
}
