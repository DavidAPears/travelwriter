import React from "react";
import ArticleMarker from "./ArticleMarker";
import ArticleMapContainer from "./ArticleMapContainer";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  } from 'react-google-maps';

const ArticlesMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.articles.map( article =>
                <ArticleMarker
                  key={article.uid}
                  doctor={article}
                  location={{lat: article.closestArticle.lat, lng: article.closestArticle.lon}}
                />);
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default ArticlesMap;
