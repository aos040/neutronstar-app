import React from 'react'

import Product from './Product'
import '../css/Utilities.css'

export default function Discount({products}) {

    return (
        <section className='section'>
            <h2 className='section-title'>Super Sale!</h2>

            {/* Grid */}
            <div className='grid-product'>
                {products.slice(0, 12).map((product)=> product.discount > 0 ? <Product key={product.id} discount={true} product={product}/> : '')}
            </div>
        </section>
    )
}
