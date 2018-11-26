import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.5074, lng: -0.1278 } }
        defaultZoom = { 4.5 }
      >
      </GoogleMap>
   ));
   return(
      <div className="google-map">
        <GoogleMapExample
          containerElement={ <div style={{ height: `750px`, width: '750px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
