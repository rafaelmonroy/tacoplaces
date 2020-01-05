import React, { Component } from 'react';
import axios from 'axios';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      rating: [],
      added: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    if (value !== 'rating') {
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        [name]: [value]
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      address: this.state.address,
      rating: this.state.rating
    };

    axios
      .post('https://secret-sea-51339.herokuapp.com/api/tacoplaces/add', data)
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
              className="input-boxes"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address
            <input
              className="input-boxes"
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Rating
            <select
              className="input-boxes"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Add;
