import React, { useState, useEffect, useContext } from "react";
import "./search.css";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";
import { AddCart } from "../cart/cart";
import { resultS, resultContext } from "../../App";
import Favourite from "../favourite/favourite";
import "../book/book.css";
import axios from "axios";

export const Result = () => {
  const [books, setBooks] = useState([]);
  const setSearch = useContext(resultContext);
  const valueOfSearch = useContext(resultS);

  const [message, setMessage] = useState("");

  useEffect(() => {
    goSearch();
  }, []);

  const goSearch = () => {
    if (setSearch.value === "type") {
      axios
        .get(
          `http://localhost:5000/books/typeOfBook/${valueOfSearch.searchVal}`
        )
        .then((res) => {
          setBooks([...res.data.book]);
        });
    } else if (setSearch.value === "name") {
      axios
        .get(
          `http://localhost:5000/books/nameOfBook/${valueOfSearch.searchVal}`
        )
        .then((res) => {
          setBooks([res.data.book]);
        });
    } else if (setSearch.value === "author") {
      axios
        .get(
          `http://localhost:5000/books/nameOfAuthor/${valueOfSearch.searchVal}`
        )
        .then((res) => {
          setBooks([...res.data.book]);
        });
    } else {
      setMessage("no books found");
    }
  };
  return (
    <div>
      <div id="main">
        {books &&
          books.map((element, index) => {
            return (
              <div className="book">
                <img className="img" src={element.image} />

                <div className="book-info">
                  <h3>{element.name}</h3>
                  <span>
                    <Route
                      exact
                      path="/result"
                      render={() => (
                        <Rate bookId={element._id} rateCount={element.rating} />
                      )}
                    />
                  </span>
                </div>

                <div className="desc">
                  <h3>Description</h3>
                  {element.description}
                  <div className="price">Price: {element.price}JD</div>

                  <div className="cart">
                    {" "}
                    <Route
                      exact
                      path="/result"
                      render={() => <AddCart bookId={element._id} />}
                    />
                  </div>
                  <div className="cart">
                    {" "}
                    <Route
                      exact
                      path="/result"
                      render={() => <Favourite bookId={element._id} />}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
