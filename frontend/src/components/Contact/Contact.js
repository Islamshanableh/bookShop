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
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Contact Us</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Us</h2>

        <div>
          
          <p> Contact Phone:+962-555-555-555 Email:Shadow.team@Shadow.org</p>
          <p>Authors :</p>
          <p> Rashed Migdady https://github.com/RashedMigdady</p>
          <p> Islam Shanableh https://github.com/Islamshanableh</p>
          <p>Odai Jawabreh https://github.com/OdaiJawabreh </p>
          <p> um Kalthoum Radi https://github.com/KulthumRadi </p>


          <button onClick={closeModal}>X</button>
        </div>
      </Modal>
    </div>
  );
};
