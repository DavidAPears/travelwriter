import React from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet';

class LeafletMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    setupMap(){
        this.map.setView([51.515968, -0.174970], 4,);
        // NB: Lat/Long hardcoded to Paddington, London, Writers base/office
    }


    createMap(element){

        var map = L.map(element);

        // Marker1 = LONDON, ENGLAND
        var marker1 = L.marker([51.515968, -0.174970]).addTo(map);
        marker1.bindPopup("<b>London</b><br>Article Title<br>Publication Name<br>Link").openPopup();

        // Marker2 = AMSTERDAM, NETHERLANDS
        var marker2 = L.marker([52.3680, 4.9036]).addTo(map);
        marker2.bindPopup("<b>Amsterdam</b><br>Article Title<br>Publication Name<br>Link").openPopup();

        // Marker3 = HAVANA, CUBA
        var marker3 = L.marker([23.1136, -82.3666]).addTo(map);
        marker3.bindPopup("<b>Havana</b><br>Article Title<br>Publication Name<br>Link").openPopup();

        // Marker4 = COLOMBO, SRI LANKA
        var marker4 = L.marker([6.9271, 79.8612]).addTo(map);
        marker4.bindPopup("<b>Colombo</b><br>Article Title<br>Publication Name<br>Link").openPopup();

        var popup = L.popup()
          .setLatLng([55.9533, -3.1883])
          .setContent("Edinburgh (Stand-alone pop-up)")
          .openOn(map);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }

    componentDidMount(){
        let self = this;
        if (this.props.createMap) {
            this.map = this.props.createMap(ReactDOM.findDOMNode(self));
        } else {
            this.map = this.createMap(ReactDOM.findDOMNode(self));
        }

        this.setupMap();
    }

    render(){

      return(
        <div>
         <div className="leafletmap">
         // NB: Map renders in this div!
         </div>
        </div>
      )
        /*Returns div with id map*/
    }
}

export default LeafletMap;
