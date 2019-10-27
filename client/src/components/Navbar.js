import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMapMarkerAlt,
  faList,
  faStore
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { NavLink } from 'react-router-dom';

const plus = <FontAwesomeIcon icon={faPlusSquare} />;
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const list = <FontAwesomeIcon icon={faList} />;
const profile = <FontAwesomeIcon icon={faStore} />;
const ig = <FontAwesomeIcon icon={faInstagram} />;

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
            <a
              href="https://www.instagram.com/tacoplaces/"
              className="nav-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ig}
            </a>
          </li>
          <li className="menu-list">
            <NavLink to="/add" className="nav-icons">
              {plus}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
