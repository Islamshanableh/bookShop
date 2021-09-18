import React, { useState,useContext} from "react";
import { userContext } from "../../App";
import { MdAddShoppingCart } from "react-icons/md"
import axios from "axios";
import "./cart.css";
import Login from "../auth/login";
import { numberContext } from "../../App";
import {Route, useHistory } from "react-router-dom";
export const AddCart =({bookId})=>{
  const history = useHistory()
    const [cart, setCart] = useState();
    const state = useContext(userContext);
    const cartD=useContext(numberContext)
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
        cartD.setNumber(cartD.number+1)
      })
      .catch((err) => {
        
      });
    } 
  
    return(
        <div className="cart1">
            
            <MdAddShoppingCart size="3em" className="c" onClick ={adding} />
            
           <div className="succ">{cart}</div>
        </div>
    )
}