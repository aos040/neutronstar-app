import React from 'react'
import Button from '../components/js/Button'
import '../components/css/OrderConfirmedScreen.css'

export default function OrderConfirmedScreen() {
  return (
    <div className='confirm-container'>
        <div className='confirm'>
            <div><i class="fa-solid fa-circle-check"></i></div>
            <p>Hey Abdimalik Osman.</p>
            <h1>Your Order is Confirmed!</h1>
            <p>We'll send you shipping confirmation email<br/>
                as soon as your order ships
            </p>
            <Button>CHECK STATUS</Button>
        </div>
    </div>
  )
}
