import React, { useState,useContext } from "react";
import { Route } from "react-router-dom";
import { userContext } from "../../App";
import { MdAddShoppingCart } from "react-icons/md"
import axios from "axios";
import "./cart.css"

export const AddCart =({bookId})=>{
    const [cart, setCart] = useState();
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
        setCart("the item added successfuly to the cart")
      })
      .catch((err) => {
         console.log(
         "Error happened while creating a new rate, please try again"
         );
      });
    } 
    return(
        <div className="cart1">
            
            <MdAddShoppingCart size="3em" className="c" onClick ={adding} />
            
           <div className="succ">{cart}</div>
        </div>
    )
}