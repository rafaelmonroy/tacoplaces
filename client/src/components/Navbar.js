import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMapMarkerAlt,
  faList
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const plus = <FontAwesomeIcon icon={faPlusSquare} />;
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const list = <FontAwesomeIcon icon={faList} />;
const question = <FontAwesomeIcon icon={faQuestionCircle} />;
const ig = <FontAwesomeIcon icon={faInstagram} />;

function Navbar() {
  return (
    <Router>
      <div className="Navbar">
        <ul id="menu">
          <li>
            <NavLink to="/list" className="nav-icons">
              {list}
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" className="nav-icons">
              {question}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-icons">
              {map}
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tacoplaces/"
              className="nav-icons"
            >
              {ig}
            </a>
          </li>
          <li>
            <NavLink to="/add" className="nav-icons">
              {plus}
            </NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Navbar;
