import React from 'react'
import '../css/ProductAdmin.css'

export default function ProductAdmin({item}) {
    
    return (
        <section className='product-row middle'>
            
            <div className='product-column product-image-col'>
                <div className='img-container'>
                    <img src={`${item.image_urls[0].image}`}></img>
                </div>
                <small>{item.name}</small>
            </div>

            <div className='product-column'>
                <small>{item.price} NOK</small>
            </div>
            
            <div className='product-column spread'>  
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>

          
        </section>
    )
}
