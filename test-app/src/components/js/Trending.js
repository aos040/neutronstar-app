import React from 'react'

import '../css/Utilities.css'
import '../css/Trending.css'


export default function Trending({ products }) {

    const trendingProducts = products.filter((product)=>product.trending===true);

    const randomTrendings = []
    for (let i = 0; i < products.length; i++) {
        const trend = trendingProducts[~~(Math.random() * trendingProducts.length)];
        if(!randomTrendings.includes(trend)){
            randomTrendings.push(trend)
        }
        if (randomTrendings.length === 3){
            break;
        }
    }

    return (
        
    <section className='categories my-5 py-1'>

        <div className='categories-container'>
            
            <h2 className='category-title'>Trending Products</h2>

            {/* Grid: contains 6 */}
            <div className='categories-grid'>

                {/* Item: 1 */}
                {randomTrendings.map((trend)=>
                <div key={trend.id} className='category-item m-1'>
                    <a className='category-links' href='#'> Trending {trend.category}</a>
                    <img className='category-img' src={`${trend.image_urls[0].image}`}></img>
                </div>)}
                
            </div>
        </div>

    </section>
    )
}
