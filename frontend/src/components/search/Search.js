import React, { useState } from "react";
import "../../App.css";
import axios from "axios";

export const Search = () => {
  const [value, setValue] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const goSearch = () => {
    if (value === "type") {
      axios
        .get(`http://localhost:5000/books/typeOfBook/${searchVal}`)
        .then((res) => {
          setBooks([...res.data.message]);
        });
    } else if (value === "name") {
      axios
        .get(`http://localhost:5000/books/nameOfBook/${searchVal}`)
        .then((res) => {
          setBooks([...res.data.message]);
        });
    } else if (value === "author") {
      axios
        .get(`http://localhost:5000/books/nameOfAuthor/${searchVal}`)
        .then((res) => {
          setBooks([...res.data.articles]);
        });
    } else {
      setMessage("no books found");
    }
  };
  return (
    <div className="App">
      <select onChange={handleChange}>
        <option value="Select">Select</option>
        <option value="type">Type</option>
        <option value="name">Name</option>
        <option value="author">Author</option>
      </select>
      <input
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      ></input>
      <button onClick={goSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
      <div>
        <p>{message}</p>
      </div>
      <div>
        <h1>all books</h1>
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
                  render={() => (
                    <Rate bookId={element._id} rateCount={element.rating} />
                  )}
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
    </div>
  );
};
