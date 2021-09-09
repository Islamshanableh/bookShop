import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Rate } from "../rating/rate";
import axios from "axios";

export const AllBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books/allbooks").then((res) => {
      setBooks([...res.data.books]);
    });
  }, []);
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
                path="/"
                render={() => <Rate userId={element._id} book={element._id} />}
              />
            </div>
          );
        })}
    </div>
  );
};
