import React from "react";
import Modal from "react-modal";
import { useBetween } from 'use-between';
import { About } from "../About/About";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Contact = () => {
  const {setIsOpenAbout} = useBetween(About)
  let subtitle;
  const [modalIsOpen, setIsOpenContact] = React.useState(false);

  function openModal() {
    setIsOpenContact(true);
    
  }

  function afterOpenModal() {
    subtitle.style.color = "#72147e";
    subtitle.style.textAlign = "center";
    subtitle.style.fontFamily = "bold";
  }

  function closeModal() {
    setIsOpenContact(false);
  }

  return (
    <div>
      <button onClick={openModal} style={{backgroundColor:'#f0e7f2' , color:"#72147e" , border:"0px" , fontWeight:"bold",fontSize:"17px", cursor: "pointer",}}>Contact us</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>to reach us :</h2>

        <div>
          
          <p> Contact Phone:+962-555-555-555 </p>
              <p>Email:Shadow.team@Shadow.org</p>
          <p>Created by :</p>
          <p> Rashed Migdady , github.com/RashedMigdady</p>
          <p> Islam Shanableh , github.com/Islamshanableh</p>
          <p>Odai Jawabreh , github.com/OdaiJawabreh </p>
          <p> Um Kulthoum Radi , github.com/KulthumRadi </p>


          <button onClick={closeModal} style={{color:"white" ,backgroundColor:"#72147e" , borderRadius:"5px" , marginLeft:"130px" , marginTop:"30px"}}>close</button>
        </div>
      </Modal>
    </div>
  );
};
