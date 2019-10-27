import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const arrow = <FontAwesomeIcon icon={faArrowRight} />;

export default class TacoPlaceMarker extends React.Component {
  render() {
    const TacoPlaceStyle = {
      position: 'absolute',
      transform: 'translate(-50%, -100%)',
      cursor: 'pointer',
      fontSize: '25px',
      color: '#df1f27',
      transition: 'font-size .3s ease 0s'
    };

    const TacoPlaceStyleHover = {
      ...TacoPlaceStyle,
      fontSize: '40px'
    };

    const style = this.props.$hover ? TacoPlaceStyleHover : TacoPlaceStyle;

    return (
      <React.Fragment>
        <div style={style}>{this.props.text}</div>
        {/* Below is info window component */}
        {this.props.ID === this.props.data._id && (
          <div className="info-window">
            <p>{this.props.data.name}</p>
            <NavLink className="info-window-details" to="/tacoplace">
              {arrow}
            </NavLink>
          </div>
        )}
      </React.Fragment>
    );
  }
}
