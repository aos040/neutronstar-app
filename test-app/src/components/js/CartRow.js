import React from 'react'
import { useDispatch } from 'react-redux'
import updateQuantity from '../../redux/actions/cartActions'
import {removeFromCart} from '../../redux/actions/cartActions'
import '../css/CartRow.css'

export default function CartRow({item}) {

    const dispatch = useDispatch()

    const selectedValue = (quantity)=>{
        dispatch(updateQuantity(item.id, quantity))
    }

    const deleteItem = () => {
        dispatch(removeFromCart(item.id))
    }
    return (
        <section className='cart-row'>
            
            <div className='cart-column product-image-col'>
                <div className='img-container'>
                    <img src={`${item.images[0].image}`}></img>
                </div>
                <small>{item.name}</small>
            </div>

            <div className='cart-column'>
                <h5>{item.price *item.quantity} NOK</h5>
            </div>
            
            <div className='cart-column qty'>
                <h5>Quantity: {item.quantity}</h5>
                <select onChange={(e)=>selectedValue(e.target.value)}>
                    <option selected={1 === item.quantity} value={1}>1</option>
                    <option selected={2 === item.quantity} value={2}>2</option>
                    <option selected={3 === item.quantity} value={3}>3</option>
                    <option selected={4 === item.quantity} value={4}>4</option>
                </select>
            </div>

            <div className='cart-column'>
                <i onClick={deleteItem} class="fa-solid fa-trash"></i>
            </div>
        </section>
    )
}
