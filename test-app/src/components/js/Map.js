import React from "react";
import LocationMarker from "./LocationMarker";
import GoogleMapReact from 'google-map-react';
import { useState } from "react";
import '../css/Map.css'
import LocationInfoBox from "./LocationInfoBox";

export default function SimpleMap({staticData, locationClicked, center, zoom, data}){

  const {tokens} = staticData
  const GoogleToken = tokens.filter((token)=>token.name==='GoogleMap')

  const [locationInfo, setLocationInfo] = useState(null)

  const markers = data.length !== 0 ? data.map((point) => <LocationMarker onClick={()=>setLocationInfo({id: point.id, name:point.name, address: point.address, postalCode: point.postalCode, city: point.city, openingHoursEnglish:point.openingHoursEnglish, distanceInKm:point.distanceInKm, routeMapsLink: point.routeMapsLink })} lat = {point.latitude} lng={point.longitude} />) : null

  const resetlocationInfo = () =>{
    setLocationInfo(null)
  }
  
  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '99vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleToken[0].token }}
        center={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>

      {locationInfo && <LocationInfoBox locationClicked={locationClicked}  resetlocationInfo={resetlocationInfo} point={locationInfo}/>}
    </div>
  );
}

SimpleMap.defaultProps = {
  zoom: 10
}

