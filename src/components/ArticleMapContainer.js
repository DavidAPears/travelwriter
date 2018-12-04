import React from "react";
import ArticlesMap from "../components/ArticlesMap";

export default class ArticleMapContainer extends React.Component {

	render() {
		return (
			<ArticlesMap
			articles={this.props.articles}
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBpaZIm41607-XYP0o7AgHNl2R4UZ5EBFc&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `500px`, width: `500px` }} />}
			mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
