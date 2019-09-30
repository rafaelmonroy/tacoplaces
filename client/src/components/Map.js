import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

//font awesome icons
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
      lat: 34.040649,
      lng: -118.19246
    },
    zoom: 13
  };

  render() {
    let latidude = 0;
    let longitude = 0;

    if (this.props.data.length === 0) {
      return null;
    } else {
      const address = this.props.data[0].address;
      // Get latidude & longitude from address.
      Geocode.setApiKey(gKey);
      Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          latidude = lat;
          longitude = lng;
        },
        error => {
          console.error(error);
        }
      );
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: gKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <TacoPlace lat={latidude} lng={longitude} text={pin} />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default Map;
