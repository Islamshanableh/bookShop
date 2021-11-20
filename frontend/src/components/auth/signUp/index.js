import React, { useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";
import Modal from "react-modal";
import "./signUp.css";
import { FormControl, InputGroup } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    backgroundColor: "#F7F6F2",
  },
};

export const Register = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = "black";
    // subtitle.style.textAlign = "center";
    // subtitle.style.fontFamily = "bold";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const [message, setMessage] = useState("");

  const [confirmP, setConfirmP] = useState("");
  const [showPassword, setShowPassword] = useState();

  const [isErorr, setIsErorr] = useState("");
  const [item, setItem] = useState(false);

  const [statusPassword, setStatusPassword] = useState();

  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://c3-bookshop.herokuapp.com/users",
        {
          firstName,
          lastName,
          country,
          email,
          password,
          birthDate,
          phoneNumber,
        }
      );
      if (result.data.success) {
        setMessage("The user has been created successfully");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again !!");
    }
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          backgroundColor: "#f0e7f2",
          color: "#72147e",
          border: "0px",
          fontWeight: "bold",
          fontSize: "17px",
          cursor: "pointer",
        }}
      >
        Register
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div style={{ display: "flex" }}>
          <AiOutlineClose onClick={closeModal} />

          <h3 class="kero">Sign up</h3>
        </div>
        <div>
          <label>{isErorr && <div>{isErorr}</div>}</label>
          <form className="theForm" onSubmit={addNewUser}>
            <div style={{ display: "flex", gap: "5px" }}>
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: "150px" }}
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ width: "150px" }}
                />
              </InputGroup>
            </div>

            <div style={{ display: "flex", gap: "5px" }}>
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  name="Country"
                  placeholder="Your Country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  style={{ width: "158px", height: "28px", borderWidth: "1px" }}
                />
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  type="date"
                  min="1960-01-01"
                  max={date}
                  onChange={(e) => setBirthDate(e.target.value)}
                  style={{ width: "150px", height: "28px" }}
                />
              </InputGroup>
            </div>

            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                style={{
                  marginLeft: "330px",
                  position: "absolute",
                  zIndex: "999",
                  marginTop: "2px",
                }}
                onClick={(e) => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </i>
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmP(e.target.value);
                }}
              />
            </InputGroup>

            <PasswordChecklist
              style={{ marginLeft: "20px", marginTop: "20px" }}
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              valueAgain={confirmP}
              onChange={(isValid) => {
                setItem(isValid);
              }}
            />

            <button disabled={!item} className="btnSubmit">
              Register
            </button>
          </form>
          {message && <div>{message}</div>}
        </div>
      </Modal>
    </div>
  );
};
