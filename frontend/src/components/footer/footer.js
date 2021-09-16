import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"
function Footer() {
    return (
  <div  className="footer " >

        <div className="folllowUs">
            follow Us on 
           
        <a href="https://www.facebook.com/"
        className="facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/"

         className="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
         <a href="https://www.instagram.com/"
        className="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
       </a>
       </div> 
       <div  className="contact" >
       <h1>contact us             
       </h1>
       <h2> phone number : +9625851111</h2>
       <p>fax: +9625852222</p>
       <p>email address: kero@book.com.jo</p>
        </div>
        <div className="Payments">
       <p> Payments Accepted: American Express, Discover, Mastercard and Visa</p> 
        </div>
  </div>
    )
}

export default Footer
