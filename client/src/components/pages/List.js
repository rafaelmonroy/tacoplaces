import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const spinner = <FontAwesomeIcon icon={faSpinner} />;
const star = <FontAwesomeIcon icon={faStar} />;

export class List extends Component {
  componentDidMount() {}
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
                  	{place.rating[0]}
                    {star}
                  </p>
                  <NavLink
                    to="/tacoplace"
                    className="list-view-details"
                    onClick={() => this.props.getInfo(place._id)}
                  >
                    View Full Details
                  </NavLink>
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
