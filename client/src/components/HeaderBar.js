import React from 'react';
import logo from '../images/tacoplaces-black-long.png';

function HeaderBar() {
  return (
    <div className="header-bar">
      <img id="long-logo-main" src={logo} alt="tacoplaces logo" />
      <button id="sign-out">Sign Out</button>
    </div>
  );
}

export default HeaderBar;
