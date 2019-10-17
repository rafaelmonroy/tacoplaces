import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import MapControl from './MapControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

import TacoPlace from './TacoPlace';

const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const location = <FontAwesomeIcon icon={faLocationArrow} />;

//google api key
const gKey = require('../config/keys').googleKey;

//user marker and style
const UserLocation = ({ text }) => <div style={UserLocationStyle}>{text}</div>;

const UserLocationStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  height: '9px',
  width: '9px',
  backgroundColor: '#4285F4',
  border: 'solid #fff 2px',
  borderRadius: '50%',
  boxShadow: 'rgba(6, 126, 255, 0.2) 0px 0px 0px 5px'
};

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
      panControl: true,
      fullscreenControl: false,
      streetViewControl: true
    };
  };

  render() {
    return (
      <div style={{ height: 'auto', width: '100%' }}>
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
          onChildClick={(key, childProps) => {
            console.log(childProps.name);
          }}
          hoverDistance={30}
        >
          <UserLocation
            lat={this.state.userLocation.lat}
            lng={this.state.userLocation.lng}
          />
          {this.props.data.map(place => {
            return (
              <TacoPlace
                lat={place.coords[0]}
                lng={place.coords[1]}
                name={place.name}
                key={place._id}
                text={pin}
              />
            );
          })}
          <MapControl
            map={this.map || null}
            controlPosition={
              this.maps ? this.maps.ControlPosition.RIGHT_BOTTOM : null
            }
          >
            <button
              id="btn-location"
              onClick={() => this.map.panTo(this.state.userLocation)}
            >
              {location}
            </button>
          </MapControl>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
