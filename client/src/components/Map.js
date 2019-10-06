import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const dot = <FontAwesomeIcon icon={faDotCircle} />;

//google api key
const gKey = require('../config/keys').googleKey;

//center the marker
const TacoPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -100%)',
  fontSize: '30px',
  color: 'red'
};

const UserLocationStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  fontSize: '30px',
  color: 'blue'
};

//map marker
const TacoPlace = ({ text }) => <div style={TacoPlaceStyle}>{text}</div>;
const UserLocation = ({ text }) => <div style={UserLocationStyle}>{text}</div>;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: [],
      center: this.props.center
    };
  }
  static defaultProps = {
    center: {
      lat: 34.02549,
      lng: -118.213858
    },
    zoom: 13
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        userLocation: [latitude, longitude]
      });
    });
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${gKey}`)
      .then(response => response.json())
      .then(response => console.log);
  }

  render() {
    if (this.props.data.length === 0) {
      return null;
    } else {
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: gKey }}
            center={{
              lat: this.state.userLocation[0],
              lng: this.state.userLocation[1]
            }}
            defaultZoom={this.props.zoom}
          >
            <UserLocation
              lat={this.state.userLocation[0]}
              lng={this.state.userLocation[1]}
              text={dot}
            />
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
