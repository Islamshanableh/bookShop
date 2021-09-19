import React, { useState,useContext } from "react";
import { Route } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Fav.css"

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
       
      setFavourite("Done!🌟")
    })
    .catch((err) => {
      history.push("/signUp")
    });
  }
return (
       <div>
            <h2 className="btnfav" onClick ={adding}>⭐</h2>
             
        
        <div style={{display:"flex" , marginLeft:"-150px"}}>
        <h2 className="ttt">
         {favourite}
        </h2>
        
        </div>
    </div>
)
}
export default Favourite