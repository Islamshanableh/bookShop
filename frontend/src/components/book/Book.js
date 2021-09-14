import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";
import { AddCart } from "../cart/cart";
import Favourite from "../favourite/favourite";
import axios from "axios";
import "./book.css"

export const AllBook =  () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books/").then((res) => {
      setBooks([...res.data.books]);
    });
  }, []);
  return (
    <div>
    <div className="slider">
      {books &&
        books.map((element, index) => {
          return (
            element.type==="Satire"&&
            <section key={element._id} >
              <br></br> <img src={element.image} onClick={()=>{
                console.log("hello");
              }}></img>,<br></br> {element.name}
              <br></br>
              {element.language}<br></br>
              {element.price},<br></br>
              <Route
                exact
                path="/home"
                render={() => <Rate bookId={element._id} rateCount={element.rating}  />}
              />
               <Route
                exact
                path="/home"
                render={() => <AddCart bookId={element._id} />}
              />
            </section>
            
          );
        })}
             </div>
             <div className="slider"> {books &&
        books.map((element, index) => {
          return (
            
            <section key={element._id} >
              <br></br> <img src={element.image} onClick={()=>{
                console.log("hello");
              }}></img>,<br></br> {element.name}
              <br></br>
              {element.language},<br></br>
              {element.price},<br></br>
              <Route
                exact
                path="/home"
                render={() => <Rate bookId={element._id} rateCount={element.rating}  />}
              />
               <Route
                exact
                path="/home"
                render={() => <AddCart bookId={element._id} />}
              />
            </section>
            
          );
        })}
        
    </div>
    </div>
  );
};
