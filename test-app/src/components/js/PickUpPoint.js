import React from 'react'
import '../css/PickUpPoint.css'

import { useEffect } from 'react'

export default function PickUpPoint({locationClicked, point}) {

  useEffect(()=>{

    
  },[point])

  return (
    <div className='point'>

      <h4>{point.name}</h4>
      <small>{point.address} <i class="fa-solid fa-location-dot"></i></small>
      <br/>
      <small>{point.postalCode}, {point.city}</small>
      <br/>
      <small>Distance, {point.distanceInKm} km  <i class="fa-solid fa-car"></i></small>

      <p>Opening Hours:</p>
      <small>{point.openingHoursEnglish} </small>

      <button onClick={locationClicked} className='point-btn'>Choose location</button>
    </div>
  )
}
