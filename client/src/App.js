import React from 'react';
import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import HeaderBar from './components/HeaderBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spinner = <FontAwesomeIcon icon={faSpinner} />;

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
      return (
        <div className="App">
          <HeaderBar />
          <div>
            <div style={{ fontSize: '20px' }}>{spinner} loading...</div>
          </div>

          <Navbar />
        </div>
      );
    } else {
      return (
        <div className="App">
          <HeaderBar />
          <Map data={this.state.data} />
          <Navbar />
        </div>
      );
    }
  }
}

export default App;
