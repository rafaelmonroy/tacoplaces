import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

//font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;

//google api key
const gKey = require('../config/keys').googleKey;

//center the marker
const TacoPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -100%)'
};

//map marker
const TacoPlace = ({ text }) => <div style={TacoPlaceStyle}>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 34.040649,
      lng: -118.19246
    },
    zoom: 13
  };

  render() {
    if (this.props.data.length === 0) {
      return null;
    } else {
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: gKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <TacoPlace
              lat={this.props.coordinates[0]}
              lng={this.props.coordinates[1]}
              text={this.props.data[0].name}
            />
            <TacoPlace
              lat={this.props.coordinates[2]}
              lng={this.props.coordinates[3]}
              text={this.props.data[1].name}
            />
            <TacoPlace
              lat={this.props.coordinates[4]}
              lng={this.props.coordinates[5]}
              text={this.props.data[2].name}
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default Map;
