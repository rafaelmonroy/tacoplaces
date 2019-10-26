import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';

const spinner = <FontAwesomeIcon icon={faSpinner} />;
const star = <FontAwesomeIcon icon={faStar} />;

export class List extends Component {
  render() {
    return (
      <div>
        {this.props.data.length === 0 ? (
          <div className="loading-container">
            <div className="spin">{spinner}</div>
            <div> &nbsp; loading...</div>
          </div>
        ) : (
          this.props.data.map(place => {
            return (
              <div key={place._id} className="tacoplace">
                <p className="place-info name">{place.name}</p>
                <p className="place-info">{place.address}</p>
                <div className="ratings-details">
                  <p className="ratings">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                  </p>
                  <a href="/" className="list-view-details">
                    View Full Details
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default List;
