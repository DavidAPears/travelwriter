import React from 'react';
import ReactDOM from 'react-dom'
import L from 'leaflet';

class LeafletMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    createMap(element){
        var map = L.map(element);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }

    setupMap(){
        this.map.setView([51.508, -0.11], 500,);
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
         <div className="map">

         </div>
      )
        /*Returns div with id map*/
    }
}

export default LeafletMap;
