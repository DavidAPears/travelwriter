import React from "react";
import { Marker } from "react-google-maps";


export default class ArticleMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={"./images/ArticleIcon.png"}
        >
        </Marker>
    );
  }
}
