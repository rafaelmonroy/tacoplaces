import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const IG = <FontAwesomeIcon icon={faInstagram} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;

export default class Info extends Component {
  render() {
    return (
      <div className="info-page">
        <div className="about">
          <h1 id="about-intro">
            TacoPlaces is a website application that allows you to{' '}
            <span>find the best taco places near you </span>that you don’t know
            about yet!{' '}
          </h1>{' '}
          <p>
            <br />
            There are many taco restaurants, which will remain nameless, that
            are extremely popular but not all that great. We all know that some
            of <span>the best taco places are deep in the underground </span>and
            you only find out about them through a friend or randomly trying it
            yourself.
          </p>
          <br />
          <p>
            The goal of <span>TacoPlaces</span> is to let you know where all the
            lowkey fire taco spots are at! The best part is, that if you know of
            a bomb taco spot, you can simply add it to the map and others on the
            app will have a chance to review it.{' '}
            <span>A taco app for the people by the people.</span>
          </p>
          <br />
          <p>
            Thanks for trying out the app and being a part of this, remember to
            let your fellow taco lovers know about this web app!{' '}
            <span>#TacoLife</span>
          </p>
          <br />
        </div>
        <div className="contact-box">
          <a
            href="mailto:TacoPlaces@Gmail.com?Subject=TacoLife"
            target="_top"
            className="contact"
          >
            TacoPlaces@Gmail.com {email}
          </a>
          <br />
          <br />
          <a href="https://www.instagram.com/tacoplaces/" className="contact">
            Follow On Instagram {IG}
          </a>
        </div>
      </div>
    );
  }
}
