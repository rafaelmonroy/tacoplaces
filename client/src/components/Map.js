import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import MapControl from './MapControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const dot = <FontAwesomeIcon icon={faDotCircle} />;
const location = <FontAwesomeIcon icon={faLocationArrow} />;

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
      userLocation: {}
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          userLocation: { lat: latitude, lng: longitude }
        });
      });
    } else {
      alert('this browser does not support geolocation');
    }
  }

  createMapOptions = maps => {
    return {
      panControl: false,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      streetViewControl: true
    };
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          options={this.createMapOptions}
          bootstrapURLKeys={{ key: gKey }}
          defaultCenter={this.props.center}
          center={{
            lat: this.state.userLocation.lat,
            lng: this.state.userLocation.lng
          }}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            this.map = map;
            this.maps = maps;
            // we need this setState to force the first mapcontrol render
            this.setState({ mapControlShouldRender: true });
          }}
          yesIWantToUseGoogleMapApiInternals
        >
          <MapControl
            map={this.map || null}
            controlPosition={
              this.maps ? this.maps.ControlPosition.TOP_LEFT : null
            }
          >
            <div id="testing">
              <button>testing</button>
            </div>
          </MapControl>
          <UserLocation
            lat={this.state.userLocation.lat}
            lng={this.state.userLocation.lng}
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

export default Map;
