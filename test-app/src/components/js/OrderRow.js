import React from 'react'
import '../css/OrderRow.css'


export default function OrderRow({item}) {


    return (
        <div className='order-row-container'>
            <div className='order-image'>
                <img src={`${item.images[0].image}`}></img>
            </div>
            <div className='order-name'>
                <small>{item.name}</small>
            </div>
            <div className='order-price'>
                <small> {item.quantity} * {item.price} = {item.quantity*item.price} KR</small>
            </div>
        </div>
    )
}
