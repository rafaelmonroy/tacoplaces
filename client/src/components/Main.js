import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

const gKey = require('../config/keys').googleKey;

//import Login from './components/Login';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Main extends React.Component {
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
          <AnyReactComponent
            lat={34.016592}
            lng={-118.10515}
            text="TACOPLACE #1"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Main;
