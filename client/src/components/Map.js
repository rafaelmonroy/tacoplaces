import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const gKey = require('../config/keys').googleKey;

const TacoPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -100%)'
};
const TacoPlace = ({ text }) => <div style={TacoPlaceStyle}>{text}</div>;

//import Login from './components/Login';

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 34.016592,
      lng: -118.10515
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: gKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <TacoPlace lat={34.016512} lng={-118.105435} text={pin} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
