import React, { useState, useEffect,useContext } from "react";
import "./search.css";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";
import { AddCart } from "../cart/cart";
import { resultS,resultContext } from "../../App";
import axios from "axios";



export const Result = ()=>{
    const [books, setBooks] = useState([]);
    const setSearch=useContext(resultContext)
    const valueOfSearch=useContext(resultS) 
  
  
    const [message, setMessage] = useState("");
   
    useEffect((
        )=>{console.log("dvadfavaaew");
            goSearch()},[])
    
  
    const goSearch =() => {
        console.log(setSearch.value);
      if (setSearch.value === "type") {
       
        axios
          .get(`http://localhost:5000/books/typeOfBook/${valueOfSearch.searchVal}`)
          .then((res) => {
            console.log(res.data);
            setBooks([...res.data.book]);
          });
      } else if (setSearch.value === "name") {
        axios
          .get(`http://localhost:5000/books/nameOfBook/${valueOfSearch.searchVal}`)
          .then((res) => {
            setBooks([res.data.book]);
           
          });
      } else if (setSearch.value === "author") {
        axios
          .get(`http://localhost:5000/books/nameOfAuthor/${valueOfSearch.searchVal}`)
          .then((res) => {
            console.log(res.data.book);
           setBooks([...res.data.book]);
            
          });
      } else {
        setMessage("no books found");
      }
    };
    return (
        <div>
 {books &&
   books.map((element, index) => {
     return (
       <div key={element._id}>
         <br></br> {element.image},<br></br> {element.name}
         <br></br>
         {element.type},<br></br>
         {element.author},<br></br>
         {element.description},<br></br>
         {element.language},<br></br>
         {element.price},<br></br>
         <Route
           exact
           path="/result"
           render={() => (
             <Rate bookId={element._id} rateCount={element.rating} />
           )}
         />
         <Route
           exact
           path="/result"
           render={() => <AddCart bookId={element._id} />}
         />
       </div>
     );
   })}
</div>

    )
}