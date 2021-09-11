import React, { useState,useContext } from "react";
import { Route } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";

export const AddCart =({bookId})=>{
    const [cart, setCart] = useState(0);
    const state = useContext(userContext);
    const token = state.token;
    const adding = ()=>{
        axios
      .post(
        "http://localhost:5000/cart",
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("The rating has been created successfully");
      })
      .catch((err) => {
         console.log(
         "Error happened while creating a new rate, please try again"
         );
      });
    } 
    return(
        <div>
            <button onClick ={adding}>
                add
            </button>
        </div>
    )
}