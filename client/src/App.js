import React from 'react';
import './App.css';
import Map from './components/Map';
//import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testName: 'test',
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
      .then(payload => this.setState({ data: payload }));
  }

  render() {
    return (
      <div className="App">
        <Map data={this.state.data} />
      </div>
    );
  }
}

export default App;
