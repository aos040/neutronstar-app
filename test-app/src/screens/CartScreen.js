import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'

import { addToCart } from '../redux/actions/cartActions';
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes';

import Button from '../components/js/Button'
import CartRow from '../components/js/CartRow'

import '../components/css/CartScreen.css'
import '../components/css/Utilities.css'


export default function CartScreen() {

    const { id } = useParams();
    const history = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(()=>{

        dispatch({
            type: DEACTIVATE_SEARCH,
        })
        dispatch(addToCart(id))
    },[dispatch, id])

    const proceedToCheckOut = () =>{
        history('/address/')
    }

    const addItems = () =>{
        history('/')
    }

    return (
        <section className='cart-section'>

            <div className='cart'>
                {cartItems.length > 0 ? 
                <div className='why'>
                    {cartItems.map((item)=><CartRow item={item}/>)}
                </div>: ''}
                
                {cartItems.length > 0 ?
                
                    <div className='table2'>
                        <h1>Total Sum</h1>
                        <div className='sub-table'> 
                            <dt>Price:</dt>
                            <dt>{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} NOK</dt>
                        </div>
                        <div className='sub-table'>
                            <dt>Transport:</dt>
                            <dt>00.00 NOK</dt>
                        </div>
                        <div className='sub-table'>
                            <dt>Tax:</dt>
                            <dt>00.00 NOK</dt>
                        </div>
                        <hr></hr>

                        <div className='sub-table'>
                            <h5>Total sum (inkl. 25% mva.)</h5>
                            <h5>{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} NOK</h5>
                        </div>
                        <Button clickHandler={proceedToCheckOut} >PROCEED TO CHECK OUT</Button>
                    </div>

                    :
                    <div className='empty-container'>
                        <div className='empty'>
                            <div><i style={{color: '#ff523b'}} class="fa-solid fa-cart-arrow-down"></i></div>
                            <h1>Your Cart is Empty!</h1>
                            <p>Please add items to your cart to proceed</p>
                            <Button clickHandler={addItems}>Add items</Button>
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}
