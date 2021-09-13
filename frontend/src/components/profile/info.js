import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import axios from "axios";

export const Info = () => {
    const [info, setInfo] = useState([]);
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
  return(
      <div></div>
  )}