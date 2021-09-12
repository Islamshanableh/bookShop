import React from "react";
import Modal from "react-modal";

export const About = () => {
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
      <button onClick={openModal}>About Us</button>
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
          <p> we are students from meraki academy</p>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
};
