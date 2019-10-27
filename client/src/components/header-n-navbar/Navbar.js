import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMapMarkerAlt,
  faList,
  faStore,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const plus = <FontAwesomeIcon icon={faPlusSquare} />;
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const list = <FontAwesomeIcon icon={faList} />;
const profile = <FontAwesomeIcon icon={faStore} />;
const info = <FontAwesomeIcon icon={faInfoCircle} />;

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul id="menu">
          <li className="menu-list">
            <NavLink to="/list" className="nav-icons">
              {list}
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink to="/tacoplace" className="nav-icons">
              {profile}
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink to="/" className="nav-icons" exact>
              {map}
            </NavLink>
          </li>

          <li className="menu-list">
            <NavLink to="/add" className="nav-icons">
              {plus}
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink to="/info" className="nav-icons">
              {info}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
