import React, { useState } from "react";
import "../../App.css";
import axios from "axios";

export const Search = () => {
  const [value, setValue] = useState("");
  const [searchVal, setSearchVal] = useState("");
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
      <button onClick={goSearch}></button>
    </div>
  );
};
