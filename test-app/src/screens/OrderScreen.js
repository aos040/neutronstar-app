import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import CheckOutSteps from '../components/js/CheckOutSteps'
import Button from '../components/js/Button'
import OrderRow from '../components/js/OrderRow'
import { DEACTIVATE_SEARCH } from '../redux/types/searchTypes'

import {CART_CLEAR_ITEMS} from '../redux/types/cartTypes'

import '../components/css/OrderScreen.css'


export default function OrderScreen() {

  const dispatch = useDispatch()
  const history = useNavigate()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  const userLogin = useSelector(state => state.userLogin)
  const {userData} = userLogin
  
  const pickUpPoints = useSelector(state => state.pickUpPoints)
  const {shippingAddress, paymentMethod} = pickUpPoints

    const statics = useSelector((state) => state.statics)
    const {staticData} = statics
    const paymentsupported = staticData && Object.keys(staticData).length !== 0 ? staticData.paymentsupported : false

    const targetPaymentArr = paymentsupported && paymentsupported.length !== 0 ? paymentsupported.filter((method)=>method.name===paymentMethod) : false
    console.log("Fuck is Vipps:", paymentsupported)
  useEffect(()=>{

    dispatch({
        type: DEACTIVATE_SEARCH,
    })

    if(cartItems.length === 0){
      history('/')
    }
    if(Object.keys(userData).length === 0){
      history('/login/')
    }
    if(Object.keys(shippingAddress).length === 0 ){
      history('/address/')
    }

  },[dispatch])

  const orderPlaced = () =>{

    // clear cart and local storage
    dispatch({
      type: CART_CLEAR_ITEMS
    })
    localStorage.removeItem('cartItems')

    // redirect
    history('/order_confirmed/')
  }

  return (
    <div>
        <CheckOutSteps logged step2 step2_checked step3 step3_checked step4 current={4}/>

        <div className='parent-order-container'>
          <div className='order-info-container'>
              <div className='address-info'>
                <h4>SHIPPING ADDRESS</h4>
                <small>{shippingAddress.address}</small>
                <br/>
                <small>{shippingAddress.postalCode}, {shippingAddress.city}</small>
                <hr style={{width:'100%'}}></hr>
              </div>

              <div className='payment-info'>
                <h4>PAYMENT METHOD</h4>
                <small>{paymentMethod}</small>
                <br/>
                {paymentsupported && paymentsupported.length !== 0 ? <img src={targetPaymentArr[0].image}/> : ''}
                <hr style={{width:'100%'}}></hr>
              </div>

              <div className='order-items'>
                <h4>ORDER ITEMS</h4>
                {cartItems.length > 0 ? 
                  <div className='limit-container'>
                    {cartItems.map((item)=><OrderRow item={item}/>)}
                  </div> 
                  : 
                ''}
              </div>
          </div>

          <div className='summary-container'>
            <div className='summary'>
              <h4>ORDER SUMMARY</h4>

              <div className='flat-sum'>
                <p>Items:</p>
                <div><small>{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} NOK</small></div>
              </div>

              <div className='flat-sum'>
                <p>Shipping:</p>
                <div><small>0.00 NOK</small></div>
              </div>

              <div className='flat-sum'>
                <p>Tax:</p>
                <p><small>0.00 NOK</small></p>
              </div>
              
              <Button clickHandler={orderPlaced}>Place Order</Button>
            </div>
          </div>
        </div>
    </div>
  )
}
