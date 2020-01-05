import React from 'react';
import './App.css';
import Map from './components/pages/Map';
import Navbar from './components/header-n-navbar/Navbar';
import HeaderBar from './components/header-n-navbar/HeaderBar';
import AddTacoPlace from './components/pages/Add';
import List from './components/pages/List';
import Info from './components/pages/Info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TacoPlace from './components/pages/TacoPlace';

const spinner = <FontAwesomeIcon icon={faSpinner} />;

//google api key
const gKey = require('./config/keys').googleKey;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      profileID: null
    };
  }

  componentDidMount() {
    const requestData = async () => {
      const response = await fetch('http://localhost:5000/api/tacoplaces', {
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

  getInfo = id => {
    this.setState({ profileID: id });
  };

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
                <Map data={this.state.data} getInfo={this.getInfo} />
              )}
            </Route>
            <Route path="/add">
              <AddTacoPlace />
            </Route>
            <Route path="/list">
              <List data={this.state.data} getInfo={this.getInfo} />
            </Route>
            <Route path="/tacoplace">
              <TacoPlace
                data={this.state.data}
                profileID={this.state.profileID}
              />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>

          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
