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
      data: []
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
        Geocode.setApiKey(gKey);
        for (let i = 0; i < payload.length; i++) {
          Geocode.fromAddress(payload[i].address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              payload[i].coords = [lat, lng];
            },
            error => {
              console.error(error);
            }
          );
        }
        this.setState({
          data: payload
        });
      });
  }

  render() {
    if (this.state.data.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          {console.log(this.state.data[0])}
          {console.log(this.state.data[0].name)}
          {console.log(this.state.data[0].address)}
          {console.log(this.state.data[0].coords)}
          <Map data={this.state.data} />
        </div>
      );
    }
  }
}

export default App;
