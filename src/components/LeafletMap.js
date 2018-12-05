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

        // Marker1 = Schengen, Luxembourg
        var marker1 = L.marker([49.4709, 6.3650]).addTo(map);
        marker1.bindPopup(
        "<b>Schengen, Luxembourg</b><br>'Schengen: A tiny village that changed European travel`<br><b>BBC Travel</b><br><a href=http://www.bbc.com/travel/story/20181202-schengen-a-tiny-village-that-changed-european-travel target=new>click to read").openPopup();

        // Marker2 = Zimbabwe, Africa
        var marker2 = L.marker([-19.0154, 29.1549]).addTo(map);
        marker2.bindPopup(
        "<b>Zimbabwe</b><br>'5 reasons you must visit Zimbabwe... now!`<br><b>Wanderlust</b><br><a href=https://www.wanderlust.co.uk/content/reasons-to-visit-zimbabwe/ target=new>click to read").openPopup();

        // Marker3 = Lithuania
        var marker3 = L.marker([55.1694, 23.8813]).addTo(map);
        marker3.bindPopup(
        "<b>Lithuania</b><br>'5 reasons you must visit Lithuania’s wild west coast`<br><b>Wanderlust</b><br><a href=https://www.wanderlust.co.uk/content/reasons-you-must-visit-west-coast-lithuania/ target=new>click to read").openPopup();

        // Marker4 = Luxembourg
        var marker4 = L.marker([49.8153, 6.1296]).addTo(map);
        marker4.bindPopup(
        "<b>Luxembourg</b><br>'A long weekend in Luxembourg: where to go & what to see`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/long-weekend-in-luxembourg-where-to-go-what-to-see.php target=new>click to read").openPopup();

        // Marker5 = Chernobyl, Ukraine
        var marker5 = L.marker([51.2763, 30.2219]).addTo(map);
        marker5.bindPopup(
        "<b>Chernobyl, Ukraine</b><br>'13 exciting escorted tours for culture vultures in 2018/2019`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/exciting-escorted-tours-for-culture-vultures.php target=new>click to read").openPopup();

        // Marker6 = Antananarivo, Madagascar
        var marker6 = L.marker([-18.8792, 47.5079]).addTo(map);
        marker6.bindPopup(
        "<b>Antananarivo, Madagascar</b><br>'Five reasons to explore Antananarivo`<br><b>Lonely Planet</b><br><a href=https://www.lonelyplanet.com/madagascar/antananarivo/travel-tips-and-articles/five-reasons-to-explore-antananarivo/40625c8c-8a11-5710-a052-1479d2754ac3 target=new>click to read").openPopup();

        // Marker7 = Vienne, France
        var marker7 = L.marker([45.51667, 4.86667]).addTo(map);
        marker7.bindPopup(
        "<b>Vienne, France</b><br>'Why charming Vienne in the Rhône Valley should be your next urban escape`<br><b>Weather2Wed</b><br><a href=https://www.weather2travel.com/blog/introducing-vienne-rhone-valley-france.php target=new>click to read").openPopup();

        // Marker8 = Dubrovnik, Croatia
        var marker8 = L.marker([42.6507, 18.0944]).addTo(map);
        marker8.bindPopup(
        "<b>Dubrovnik, Croatia</b><br>'How and when to do Dubrovnik on a short break`<br><b>British Guild Of Travel Writers</b><br><a href=https://bgtw.org/dubrovnik-short-break/ target=new>click to read").openPopup();

        // Marker9 = Grenoble, France
        var marker9 = L.marker([45.1885, 5.7245]).addTo(map);
        marker9.bindPopup(
        "<b>Grenoble, France</b><br>'11 reasons to visit Grenoble this summer`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/visit-grenoble-for-summer-holidays.php target=new>click to read").openPopup();

        // Marker10 = Beach Article (Cala Tonnarella, Sicily, Italy)
        var marker10 = L.marker([37.575748, 13.218615]).addTo(map);
        marker10.bindPopup(
        "<b>Sicily, Italy</b><br>'8 tips & hacks for your beach holiday`<br><b>Love Exploring</b><br><a href=https://www.loveexploring.com/news/74382/8-tips-hacks-for-your-beach-holiday target=new>click to read").openPopup();

        // Marker11 = Dubrovnik, Croatia
        var marker11 = L.marker([42.654551, 18.077748]).addTo(map);
        marker11.bindPopup(
        "<b>Dubrovnik, Croatia</b><br>'How to spend a long weekend in Dubrovnik, Croatia`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/how-to-spend-a-long-weekend-in-dubrovnik.php target=new>click to read").openPopup();

        // Marker12 = Victoria Falls, Zimbabwe
        var marker12 = L.marker([-17.9243, 25.8572]).addTo(map);
        marker12.bindPopup(
        "<b>Victoria Falls, Zimbabwe</b><br>'How to make the most of Victoria Falls, Zimbabwe`<br><b>Weather2Travel</b><br><a href=https://www.weather2travel.com/blog/how-to-make-the-most-of-victoria-falls-zimbabwe.php target=new>click to read").openPopup();

        // Marker13 = Madagascar
        var marker13 = L.marker([-17.9243, 25.8572]).addTo(map);
        marker13.bindPopup(
        "<b>Madagascar</b><br>'8 reasons why madagascar should be on your radar`<br><b>Rough Guides</b><br><a href=https://www.roughguides.com/article/8-reasons-why-madagascar-should-be-on-your-radar/ target=new>click to read").openPopup();



        var popup = L.popup()
          .setLatLng([55.9533, -3.1883])
          .setContent("Click pins to reveal articles ✏️")
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
