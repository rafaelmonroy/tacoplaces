import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;

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
      lat: 34.028121,
      lng: -118.219146
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
            {this.props.data.map(place => {
              return (
                <TacoPlace
                  lat={place.coords[0]}
                  lng={place.coords[1]}
                  key={place._id}
                  text={pin}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default Map;
