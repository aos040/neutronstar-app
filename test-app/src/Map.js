import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 59.9139,
      lng: 10.7522
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCYbZGuOy0SWC1wFsYjaUoIYDYi15cCVvQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}