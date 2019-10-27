import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spinner = <FontAwesomeIcon icon={faSpinner} />;

export default class TacoPlace extends Component {
  render() {
    return (
      <div>
        {this.props.data.length === 0 ? (
          <div className="loading-container">
            <div className="spin">{spinner}</div>
            <div> &nbsp; loading...</div>
          </div>
        ) : (
          <div className="tacoplace-profile">
            <div>TacoPlace Profile Goes Here</div>
          </div>
        )}
      </div>
    );
  }
}
