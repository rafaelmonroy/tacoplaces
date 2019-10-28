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
                  <div className="profile-content" key={place._id}>
                    <h1 className="profile-title">{place.name}</h1>
                    <div className="image-container">image</div>
                    <p className="profile-address">{place.address}</p>
                    <button className="directions">GET DIRECTIONS</button>
                    <p className="profile-ratings">
                      {star}
                      {star}
                      {star}
                      {star}
                      {star}
                    </p>
                    <p className="reviews-title">REVIEWS</p>
                    <span className="no-reviews">no reviews yet</span>
                    <p className="leave-review">Review this TacoPlace</p>
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
