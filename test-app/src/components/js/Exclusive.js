import React from 'react'
import '../css/Exclusive.css'

export default function Exclusive({exclusive, exclusive_image}) {


  return (
    <section className='exclusive'>

        <h1>Latest Product</h1>
        {exclusive && exclusive.length !== 0 && exclusive_image.length !== 0 ? 
        <div className='exclusive-container'>

          {/* Item 1 */}
          
          <div className='exclusive-pic-container primary-pic'>
              <img src={`${exclusive_image[0].image}`}></img>
          </div>

          {/* Item 2 */}
          <div className='exclusive-text-container'>
              <h3>{exclusive[0].title}</h3>
              <small>
                {exclusive[0].description}
              </small>
          </div>

          {/* Item 3 */}
          <div className='exclusive-pic-container secondary-pic'>
              <img src={`${exclusive_image[1].image}`}></img>
          </div>

        </div>
        : ''
          }

    </section>
  )
}
