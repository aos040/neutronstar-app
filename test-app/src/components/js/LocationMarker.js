import React from 'react'
import { Icon } from '@iconify/react';
import '../css/LocationMarker.css'

export default function LocationMarker({lat, lng, onClick}) {
  return (
    <div className='location-marker' onClick={onClick}>
        <Icon icon="entypo:location-pin" className='location-icon'/>
    </div>
  )
}
