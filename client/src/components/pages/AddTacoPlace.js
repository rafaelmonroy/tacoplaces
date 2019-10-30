import React, { Component } from 'react';

export class AddTacoPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const postTacoPlace = async () => {
      const data = { name: this.state.name, address: this.state.address };
      const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
      try {
        const fetchResponse = await fetch('/api/tacoplaces', settings);
        const json = await fetchResponse.json();
        return json;
      } catch (err) {
        console.log(err);
      }
    };
    postTacoPlace();
  };

  render() {
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

export default AddTacoPlace;
