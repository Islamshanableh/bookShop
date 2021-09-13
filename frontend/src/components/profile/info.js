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
  return <div></div>;
};
