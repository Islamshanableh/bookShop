import React, { useState,useContext } from "react";
import { Route } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";
import { useHistory } from "react-router-dom";

const  Favourite=({bookId}) =>{
const [favourite, setFavourite] = useState();
const state = useContext(userContext);
const token = state.token;
 const history = useHistory()
const adding = ()=>{

    axios
    .post(
      "http://localhost:5000/favorite",
      {bookId},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )   .then((res) => {
       
      setFavourite("the item added successfuly favourite")
    })
    .catch((err) => {
      history.push("/signUp")
    });
  }
return (
    <div>
            <button onClick ={adding}>
            addToFavourite 
        </button>
        <div>
        {favourite}
        </div>
    </div>
)
}
export default Favourite