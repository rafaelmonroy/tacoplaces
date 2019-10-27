import React from 'react';
import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import HeaderBar from './components/HeaderBar';
import AddTacoPlace from './components/AddTacoPlace';
import List from './components/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TacoPlace from './components/TacoPlace';

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
    return (
      <Router>
        <div className="App">
          <HeaderBar />
          <Switch>
            <Route exact path="/">
              {this.state.data.length === 0 ? (
                <div className="loading-container">
                  <div className="spin">{spinner}</div>
                  <div> &nbsp; loading...</div>
                </div>
              ) : (
                <Map data={this.state.data} />
              )}
            </Route>
            <Route path="/add">
              <AddTacoPlace />
            </Route>
            <Route path="/list">
              <List data={this.state.data} />
            </Route>
            <Route path="/tacoplace">
              <TacoPlace data={this.state.data} />
            </Route>
          </Switch>

          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
