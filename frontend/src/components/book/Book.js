import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";
import { AddCart } from "../cart/cart";
import axios from "axios";

export const AllBook =  () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books/").then((res) => {
      setBooks([...res.data.books]);
    });
  }, []);
  return (
    <div>
      <h1>rasgeg</h1>
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
                path="/home"
                render={() => <Rate bookId={element._id} rateCount={element.rating}  />}
              />
               <Route
                exact
                path="/home"
                render={() => <AddCart bookId={element._id} />}
              />
              
            </div>
          );
        })}
    </div>
  );
};
