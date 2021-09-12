
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";

export const  FavBage =()=> {
    const [book, setBook] = useState();
    const [status, setStatus] = useState();

    const state = useContext(userContext);
    const token = state.token;
    useEffect(() => {
        axios
          .get("http://localhost:5000/favorite/getAllFav/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
              console.log(res.data)
            setBook(res.data.message);
          });
      }, [book]);



}