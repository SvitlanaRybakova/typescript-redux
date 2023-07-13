import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FiMapPin } from 'react-icons/fi';

const init = {
  lat: 37.42216,
  lng: -122.08427,
};

const LocationPin = ({ text = '' }) => (
  <div className='pin'>
    <FiMapPin />
    <p className='pin-text'>{text}</p>
  </div>
);

const Map = ({ location = init, zoomLevel = 17 }) => {
  return (
    
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
          // lat={location.lat}
          // lng={location.lng}
          // text="any"
          />
        </GoogleMapReact>
      </div>
   
  );
};

export default Map;
