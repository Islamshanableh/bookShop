import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import axios from "axios";

export const Info = () => {
  const [info, setInfo] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState("");
  const state = useContext(userContext);
  const token = state.token;
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/users",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setInfo([...res.data.userInfo]);
      });
  }, []);
  const updateInfo = () => {
    axios
      .post(
        "http://localhost:5000/users/update",
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phone,
          BirthDate: date,
          country: country,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setInfo([...res.data.userInfo]);
        setMessage(res.data.message);
      });
  };
  return (
    <div>
      <div>
        <h1>all books</h1>
        {info &&
          info.map((element, index) => {
            return (
              <div key={element._id}>
                <br></br>
                <br></br>
                <label>firstName</label>{" "}
                <input
                  type="text"
                  defaultValue={element.firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>lastName</label>
                <input
                  type="text"
                  defaultValue={element.lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>phone</label>{" "}
                <input
                  type="text"
                  defaultValue={element.phoneNumber}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>BirthDate</label>{" "}
                <input
                  type="text"
                  defaultValue={element.BirthDate}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>country</label>{" "}
                <input
                  type="text"
                  defaultValue={element.country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                ></input>
                <br></br>
                <button onClick={updateInfo}>update</button>
              </div>
            );
          })}
      </div>
      <h1>{message}</h1>
    </div>
  );
};
