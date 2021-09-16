import React, { useState,useContext ,createContext} from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { userContext } from "../../App";
import { MdAddShoppingCart } from "react-icons/md"
import axios from "axios";
import "./cart.css";
export const numberContext = createContext()

export const AddCart =({bookId})=>{
    const [cart, setCart] = useState();
    const [number,setNumber]=useState(0)
    const state = useContext(userContext);
    const token = state.token;
    const cartNumber = {number,setNumber}
    
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
        setNumber(number+1)
      })
      .catch((err) => {
         console.log(
         "Error happened while creating a new rate, please try again"
         );
      });
    } 
    <numberContext.Provider value={cartNumber}>
      <ShoppingCart></ShoppingCart>
    </numberContext.Provider>
    return(
        <div className="cart1">
            
            <MdAddShoppingCart size="3em" className="c" onClick ={adding} />
            
           <div className="succ">{cart}</div>
        </div>
    )
}