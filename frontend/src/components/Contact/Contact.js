import React from "react";
import "./contact.css"
import emailjs from "emailjs-com";
import swal from "sweetalert";


export const Contact = () => {

  const sendEmail = (e) => {
    console.log("working");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_jzwlu6m",
        e.target,
        "user_OM0LjSxw6YbJuM14pCm2f"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Thank you for youre messgae",
            "Auto_Rental team will contact with you as soon as",
            "success"
          );
        },
        (error) => {
          console.log("err", error);
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="odaiyy">
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Amman-Jordan</div>
          <div className="text-two">str20,Bul10</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0096277777777</div>
          <div className="text-two">+0096288888888</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">KeroBook@gmail.com</div>
          <div className="text-two">info.bookshop@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any note from us or any types of quries related to our App, you can send Us message from here. It's my pleasure to help you.</p>
      <form onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name" name="from_name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" name="email"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your Subject"  name="subject"/>
        </div>
        <div className="input-box rashid">
          <textarea type="text" placeholder="Enter your Message" name="message"> </textarea>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button pppppp">
          <input type="button" value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
    // <div >
    //   <center>
      
    //     <p > Contact Phone:+962-555-555-555 </p>
    //     <p>Email:Shadow.team@Shadow.org</p>
    //     <p>Created by :</p>
    //     <p> Rashed Migdady , github.com/RashedMigdady</p>
    //     <p> Islam Shanableh , github.com/Islamshanableh</p>
    //     <p>Odai Jawabreh , github.com/OdaiJawabreh </p>
    //     <p> Um Kulthoum Radi , github.com/KulthumRadi </p>
  
    //   </center>
    // </div>
  );
};
