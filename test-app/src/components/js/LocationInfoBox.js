import React from 'react'
import { Link } from 'react-router-dom';

import '../css/LocationInfoBox.css'

export default function LocationInfoBox({locationClicked, resetlocationInfo, point}) {
  return (
    <div className='location-info'>
        <div className='close-icon'>
            <i onClick={resetlocationInfo} class="fa-solid fa-xmark"></i>
        </div>

        <h4>{point.name}</h4>
        <small>{point.address} <i class="fa-solid fa-location-dot"></i></small>
        <br/>
        <small>{point.postalCode}, {point.city}</small>
        <br/>
        <small>Distance, {point.distanceInKm} km  <i class="fa-solid fa-car"></i></small>
        <p>Opening Hours:</p>
        <small>{point.openingHoursEnglish} </small>
        <br/>
        <a target="_blank" href={point.routeMapsLink}>Route <i class="fa-solid fa-route"></i></a>
        <button onClick={locationClicked} className='location-info-btn'>Choose location</button>
    </div>
  )
}
