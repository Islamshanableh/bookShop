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
      <ul>contact us</ul>             
       
       <li> phone number : +9625851111</li>
       <li>fax: +9625852222</li>
       <li>email address: kero@book.com.jo</li>
        </div>
        <div className="Payments">
       <p> Payments Accepted:
          Express, Mastercard and Visa
         paybal </p> 
        </div>
        <div className="Rights" >© 2021 All Rights Reserved</div>
  </div>
    )
}

export default Footer
