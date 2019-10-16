import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spinner = <FontAwesomeIcon icon={faSpinner} />;

export class List extends Component {
  render() {
    return (
      <div>
        <h1>This is the List Page</h1>
        {this.props.data.length === 0 ? (
          <div style={{ fontSize: '20px', color: '#df1f27' }}>
            {spinner} loading...
          </div>
        ) : (
          this.props.data.map(place => {
            return (
              <ul key={place._id} id="list-items">
                <li className="list-item">
                  <span className="list-titles">Name: </span>
                  {place.name}
                </li>
                <li className="list-item">
                  <span className="list-titles">Address: </span>
                  {place.address}
                </li>
              </ul>
            );
          })
        )}
      </div>
    );
  }
}

export default List;
