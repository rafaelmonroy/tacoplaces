import React from 'react';
import './App.css';
import Map from './components/Map';
import Geocode from 'react-geocode';

//google api key
const gKey = require('./config/keys').googleKey;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      coordinates: []
    };
  }

  componentDidMount() {
    fetch('/api/tacoplaces', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(payload => {
        this.setState({ data: payload });
        Geocode.setApiKey(gKey);
        for (let i = 0; i < this.state.data.length; i++) {
          Geocode.fromAddress(payload[i].address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              let joined = this.state.coordinates.concat(lat, lng);
              this.setState({ coordinates: joined });
            },
            error => {
              console.error(error);
            }
          );
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Map data={this.state.data} coordinates={this.state.coordinates} />
      </div>
    );
  }
}

export default App;
