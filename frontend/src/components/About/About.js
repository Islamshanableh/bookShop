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
    borderRadius:"5px",
    backgroundColor:"#F7F6F2",
  },
};

export const About = () => {
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
      <button onClick={openModal} style={{backgroundColor:'#F7F6F2' , color:"black" , border:"0px" , fontWeight:"bold"}}>About</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>About Us</h2>

        <div>
          
          <p>Better Books for everyone,is an online book retailer based in Amman that ships to readers throughout the Middle East.</p>
           <p> It was founded in October 2021 by entrepreneur Meraki Academy with the support of Shadow Team.</p>
          <button onClick={closeModal} style={{backgroundColor:"gray" , borderRadius:"5px" , marginLeft:"350px" , marginTop:"30px"}}>close</button>
        </div>
      </Modal>
    </div>
  );
};
