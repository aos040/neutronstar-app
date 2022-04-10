import React from "react";
import GoogleMapReact from 'google-map-react';
import '../css/Map.css'

export default function DefaultMap({staticData, center, zoom}){

  const {tokens} = staticData
  const GoogleToken = tokens.filter((token)=>token.name==='GoogleMap')

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '82vh', width: '70%' }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleToken[0].token }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  );
}

DefaultMap.defaultProps = {
  center: {
      lat: 59.9139,
      lng: 10.7522
  },
  zoom: 11
}
