import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function footer() {
    return (
        <div>
        <div className="folllowUs">
            follow Us on 
            </div>    
            <a href=""
        className="facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href=""
        className="facebook">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href=""
        className="facebook">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        </div>
    )
}

export default footer
