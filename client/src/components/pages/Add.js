import React, { Component } from 'react';
import axios from 'axios';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      added: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = { name: this.state.name, address: this.state.address };

    axios
      .post('/api/tacoplaces/add', data)
      .then(response => console.log('client successfully posted'))
      .then(() => this.setState({ added: true }))
      .catch(err => console.log('client error =>', err));
  };

  render() {
    if (this.state.added === true) {
      return (
        <div className="added">
          Thank you for contributing, your TacoPlace has been added!{' '}
          <a href="/">Click Here</a> to see it in the map!
        </div>
      );
    }
    return (
      <div className="add-page">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Add;
