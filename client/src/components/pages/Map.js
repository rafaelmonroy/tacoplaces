import React from 'react';
import '../../App.css';
import GoogleMapReact from 'google-map-react';
import MapControl from '../markers-n-controls/MapControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

import TacoPlaceMarker from '../markers-n-controls/TacoPlaceMarker';

const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const location = <FontAwesomeIcon icon={faLocationArrow} />;

//google api key
const gKey = require('../../config/keys').googleKey;

//user marker and style
const UserLocation = ({ text }) => <div className="user-location">{text}</div>;

const NoUserLocation = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: null,
      ID: null
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
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            this.map = map;
            this.maps = maps;
            // we need this setState to force the first mapcontrol render
            this.setState({ mapControlShouldRender: true });
          }}
          yesIWantToUseGoogleMapApiInternals
          onChildClick={(key, childProps) => {
            this.setState({ ID: key });
          }}
          onClick={() => this.setState({ ID: null })}
          hoverDistance={30}
        >
          {this.state.userLocation === null ? (
            <NoUserLocation></NoUserLocation>
          ) : (
            <UserLocation
              lat={this.state.userLocation.lat}
              lng={this.state.userLocation.lng}
            />
          )}
          {this.props.data.map(place => {
            return (
              <TacoPlaceMarker
                data={place}
                lat={place.coords[0]}
                lng={place.coords[1]}
                name={place.name}
                key={place._id}
                text={pin}
                ID={this.state.ID}
                getInfo={this.props.getInfo}
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
              onClick={() => {
                if (this.state.userLocation === null) {
                  alert(
                    'Your browser is not allowing TacoPlaces to know your location, turn on location services to allow TacoPlaces to locate you.'
                  );
                } else {
                  this.map.panTo(this.state.userLocation);
                }
              }}
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
