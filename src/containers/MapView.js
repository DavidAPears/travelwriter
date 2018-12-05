import React from 'react';
import {geolocated} from 'react-geolocated';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet';
import L from 'leaflet';
import Leaflet from 'leaflet';


const MapView = (props) => {
  let position = null;
  let shopData = null;
    console.log("Position:", position);
    console.log("ShopData:", shopData);
  if (props.coords) {
  position = [props.coords.latitude, props.coords.longitude]
}
if(props.shopData) {
  shopData = props.shopData;
}
console.log("ShopData:", shopData);

    const coffeeIcon = new L.Icon({
      iconUrl: require('../pencil.png'),
      shadowUrl: null,
      iconSize: [35,55],
      iconAnchor: [12,41],
      popupAnchor: [1,-34],

    });

    const userIcon = new L.Icon({
      iconUrl: require('../marker.png'),
      shadowUrl: null,
      iconSize: [35,55],
      iconAnchor: [12,41],
      popupAnchor: [1,-34],

    });

    const userMarker =
      <Marker position={position}
        icon={userIcon}>
        <Popup>
          <p> You are here </p>
        </Popup>
      </Marker>




    const cafeMarkers = props.shopData.map(shop => (
      <Marker position={shop.location.coordinates}
        key={shop.id}
        icon={coffeeIcon}>
        <Popup>
          <span>
            {shop.name}
            {shop.description}
          </span>
        </Popup>

      </Marker>
      ));

      const map = (
        <Map center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {cafeMarkers}
          {userMarker}

        </Map>
      );

      return(
        <div className="map-view">
        <p>HELLO</p>
        
          {map}

        </div>

      );
  }


const componentWrapper = geolocated({
positionOptions: {
  enableHighAccuracy: true,
},
userDecisionTimeout: 5000,
})

const MapViewWithLocation = componentWrapper(MapView);

export default MapViewWithLocation;
