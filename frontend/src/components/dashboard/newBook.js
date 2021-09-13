import React, { useState, useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
export const NewBook = () => {
  const state = useContext(userContext);
  const token = state.token;
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [author, setAuthor] = useState();
  const [language, setLanguage] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [success, setSuccsess] = useState(null);
  const addNewBook = () => {
    axios
      .post(
        "http://localhost:5000/books/createbook",
        { image, name, type, author, language, description, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setSuccsess("The book has been created successfully");
      })
      .catch((err) => {
        setSuccsess(
          "Error happened while creating a new book, please try again"
        );
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="Name of book"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="type of book"
        onChange={(e) => {
          setType(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="Name of author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="language of book"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="book description "
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <input
        type="textarea"
        placeholder="book description "
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <button onClick={addNewBook}>Create New book</button>
      <p>{success}</p>
    </div>
  );
};
