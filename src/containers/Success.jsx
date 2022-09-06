import React from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

function Success() {
  const { state } = React.useContext(AppContext);
  const {buyer} = state;
  const location = useGoogleAddress(buyer[0].address)

  return (
    <div className="Success">
      <div className="Success content">
        <h2>{`${buyer[0].name}, graicas por tu compra`}</h2>
        <span>Ya va ha llegar</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  );
}

export default Success;
