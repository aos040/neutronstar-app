import React from 'react'
import { Link } from 'react-router-dom'

import '../css/CheckOutSteps.css'

export default function CheckOutSteps({logged, step2, step3, step4, step2_checked, step3_checked, step4_checked, current}) {
  return (
    <nav className='checkout-nav'>
        {logged && 
        <div className='enable'>
            <Link className='enable-link' to={'#'}>Login {logged && <i class="fa-solid fa-circle-check"></i>}</Link>
        </div>}

        {step2 ? 
        <div className='enable'>
            <Link className='enable-link' to={'/address/'}>Address {step2_checked && <i class="fa-solid fa-circle-check"></i>} {current === 2 ? <i class="fa-solid fa-pen-to-square"></i> : ''}</Link>
        </div>:
        <div className='disable'>
            <Link className='disable-link' to={'#'}>Address</Link>
        </div>
        }

        {step3 ? 
        <div className='enable'>
            <Link className='enable-link' to={'/payment/'}>Payment {step3_checked && <i class="fa-solid fa-circle-check"></i>} {current === 3 ? <i class="fa-solid fa-pen-to-square"></i> : ''}</Link>
        </div>:
        <div className='disable'>
            <Link className='disable-link' to={'#'}>Payment</Link>
        </div>
        }

        {step4 ? 
        <div className='enable'>
            <Link className='enable-link' to={'/'}>Place Order {step4_checked && <i class="fa-solid fa-circle-check"></i>} {current === 4 ? <i class="fa-solid fa-pen-to-square"></i>: ''}</Link>
        </div>:
        <div className='disable'>
            <Link className='disable-link' to={'#'}>Place Order</Link>
        </div>
        }

    </nav>
  )
}
