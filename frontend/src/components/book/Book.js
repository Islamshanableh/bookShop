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
};
