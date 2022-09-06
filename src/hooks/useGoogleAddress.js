import React from "react";
import axios from "axios";

const useGoogleAddress = (address)=> {
    const [map,setMap] = React.useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAoeFQ9VAkqUsch4tBf9X8IyW_kjF2ivog`
    React.useEffect(async ()=>{
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location);

    },[]);
    return(map);

}
export default useGoogleAddress