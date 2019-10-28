import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';

const spinner = <FontAwesomeIcon icon={faSpinner} />;
const star = <FontAwesomeIcon icon={faStar} />;

export default class TacoPlace extends Component {
  render() {
    return (
      <div>
        {this.props.data.length === 0 ? (
          <div className="loading-container">
            <div className="spin">{spinner}</div>
            <div> &nbsp; loading...</div>
          </div>
        ) : this.props.data.length !== 0 && this.props.profileID === null ? (
          <div className="none-selected">
            Please select TacoPlace from List or Map view to see details here
          </div>
        ) : (
          <div className="tacoplace-profile">
            {this.props.data.map(place => {
              if (place._id === this.props.profileID) {
                return (
                  <div className="profile-content">
                    <h1>{place.name}</h1>
                    <div className="image-container">image</div>
                    <p>{place.address}</p>
                    <button>GET DIRECTIONS</button>
                    <p className="profile-ratings">
                      {star}
                      {star}
                      {star}
                      {star}
                      {star}
                    </p>
                    <p>REVIEWS</p>
                    <p>Review this TacoPlace</p>
                  </div>
                );
              } else return null;
            })}
          </div>
        )}
      </div>
    );
  }
}
