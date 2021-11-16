import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../../../App";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./login.css";
import { Register } from "../signUp";
import GoogleLogin from "react-google-login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    backgroundColor: "#F7F6F2",
    overlay: {
      backgroundColor: "#ffffff",
    },
  },
};

const Login = ({ value }) => {
  const token = useContext(userContext);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  if (value) {
    console.log(value);
  }
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

  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState();

  const tokenContext = useContext(userContext);

  const checkValid = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        if (!res.data.success) {
          return setStatus(<div>{res.data.message}</div>);
        }
        localStorage.setItem("token", res.data.token);
        tokenContext.setToken(res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        throw err;
      });
  };

  const responsesuccessGoogle = (response) => {
    // console.log(response.profileObj);
    axios
      .post("http://localhost:5000/login/google", { tokenId: response.tokenId })
      .then((res) => {
        console.log(res);
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          tokenContext.setToken(res.data.token);
          history.push("/home");
        } else throw Error;
      })
      .catch((err) => {
        if (err.message) {
          setMessage("Error happened while Login, please try again");
          console.log(message);
        }
      });
  };
  const responseErrorGoogle = (response) => {
    setMessage(
      "responseErrorGoogle => Error happened while Login, please try again"
    );
    console.log(message);
  };
  return (
    <>
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
          Login
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <button
            onClick={closeModal}
            style={{
              backgroundColor: "#72147e",
              borderRadius: "5px",
              marginLeft: "350px",
              marginTop: "1px",
              color: "white",
            }}
          >
            X
          </button>
          <h3 class="kero">KERO BOOK</h3>
          <div style={{ textAlign: "center", display: "grid" }}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>

            <input
              type="email"
              placeholder="Email-here"
              style={{ width: "150px", marginLeft: "115px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              placeholder="Password Here"
              style={{ width: "150px", marginLeft: "115px" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <button
              onClick={checkValid}
              style={{
                width: "60px",
                borderRadius: "3px",
                marginLeft: "160px",
                color: "white",
                backgroundColor: "#72147e",
              }}
              className="logBtn"
            >
              Login
            </button>
          </div>

          <div
            style={{ display: "flex", marginLeft: "130px", marginTop: "30px" }}
          >
            <p> Login or </p>
            <p>
              <Register />
            </p>

            <div className="social-login mt-0">
              <span className="social-label">Or login with</span>
              <ul className="socials">
                <GoogleLogin
                  clientId="517614289407-55p7q5bogii5ln2l6qevnribl05519kn.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={(response) => responsesuccessGoogle(response)}
                  onFailure={(response) => responseErrorGoogle(response)}
                  cookiePolicy={"single_host_origin"}
                />
              </ul>
            </div>
          </div>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>{status}</p>
        </Modal>
      </div>
    </>
  );
};

export default Login;
