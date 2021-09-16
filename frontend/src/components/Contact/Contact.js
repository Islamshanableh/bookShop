import React from "react";
import Modal from "react-modal";

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
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "black";
    subtitle.style.textAlign = "center";
    subtitle.style.fontFamily = "bold";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} style={{backgroundColor:'#F7F6F2' , color:"black" , border:"0px" , fontWeight:"bold"}}>Contact us</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>For Reach us :</h2>

        <div>
          
          <p> Contact Phone:+962-555-555-555 </p>
              <p>Email:Shadow.team@Shadow.org</p>
          <p>Created by :</p>
          <p> Rashed Migdady , github.com/RashedMigdady</p>
          <p> Islam Shanableh , github.com/Islamshanableh</p>
          <p>Odai Jawabreh , github.com/OdaiJawabreh </p>
          <p> Um Kulthoum Radi , github.com/KulthumRadi </p>


          <button onClick={closeModal} style={{backgroundColor:"gray" , borderRadius:"5px" , marginLeft:"130px" , marginTop:"30px"}}>close</button>
        </div>
      </Modal>
    </div>
  );
};
