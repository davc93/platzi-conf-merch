import React from 'react'
import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api'
function Map({data}) {

    const mapStyles = {

        height:'50vh',
        width:'100%'
    }

    const defaultCenter = {
        lat:data.lat,
        lng:data.lng

    }
  return (
    
    <LoadScript googleMapsApiKey='AIzaSyAoeFQ9VAkqUsch4tBf9X8IyW_kjF2ivog'>
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={9}
            center={defaultCenter}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    </LoadScript>
  )
}

export default Map