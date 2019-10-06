import React from 'react';
import './App.css';
import Map from './components/Map';

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
    const requestData = async () => {
      const response = await fetch('/api/tacoplaces', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      const json = await response.json();
      const newData = await [...json];
      for (let i = 0; i < newData.length; i++) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${newData[i].address}&key=${gKey}`
        );
        const json = await response.json();
        const { lat, lng } = json.results[0].geometry.location;
        newData[i].coords = [lat, lng];
      }
      this.setState({ data: newData });
    };
    requestData();
  }

  render() {
    if (this.state.data.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Map data={this.state.data} />
        </div>
      );
    }
  }
}

export default App;
