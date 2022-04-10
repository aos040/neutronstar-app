import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Product.css'

function Product({product, discount}) {

    return (

        <div>
            <div className='product'>

                <Link to={`product/${product.id}`} className='link'>
                    <img className='product-pic' src={`${product.image_urls[0].image}`}></img>
                    <h4>{product.name}</h4>
                    <p className='disc-pr'><small>-{product.discount}%</small></p>
                </Link>

                <div className='rating'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                {product.discount > 0 && discount === true
                    ? 
                    <div className='prices'>
                        <p className='price color'>{product.price *  ( (100-product.discount)/100 )} kr</p>
                        <p className='price discount-price'>{product.price} kr</p>
                    </div>
                    :
                    <div className='prices'>
                        <p className='price'>{product.price} kr</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Product;
