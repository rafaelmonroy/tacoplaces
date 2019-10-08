import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMapMarkerAlt,
  faList
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const plus = <FontAwesomeIcon icon={faPlusSquare} />;
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const list = <FontAwesomeIcon icon={faList} />;
const question = <FontAwesomeIcon icon={faQuestionCircle} />;
const ig = <FontAwesomeIcon icon={faInstagram} />;

function Navbar() {
  return (
    <div className="Navbar">
      <ul id="menu">
        <li>
          <a href="/" className="nav-icons">
            {list}
          </a>
        </li>
        <li>
          <a href="/" className="nav-icons">
            {question}
          </a>
        </li>
        <li>
          <a href="/" className="nav-icons">
            {map}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tacoplaces/" className="nav-icons">
            {ig}
          </a>
        </li>
        <li>
          <a href="/" className="nav-icons">
            {plus}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
