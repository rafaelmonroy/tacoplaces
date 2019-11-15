import React, { Component } from 'react';

export class Add extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    const postTacoPlace = async () => {
      const data = { name: this.state.name, address: this.state.address };
      const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        redirect: 'follow'
      };
      try {
        await fetch('/api/tacoplaces', settings);
      } catch (err) {
        console.log(err);
      }
    };
    postTacoPlace();
  };

  render() {
    return (
      <div className="add-page">
        <form
          onSubmit={this.handleSubmit}
          method="post"
          action="/api/tacoplaces/"
        >
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
