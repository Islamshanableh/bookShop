import React, { useState, useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
export const NewBook = () => {
    const state = useContext(userContext);
    const token = state.token;
    const [image, setImage] = useState(0);
    const [name, setName] = useState(0);
    const [type, setType] = useState(0);
    const [author, setAuthor] = useState(0);
    const [language, setLanguage] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState(0);
    const [success, setSuccsess] = useState(null);
    const addNewBook = () => {
        axios
          .post(
            "http://localhost:5000/books/createbook",
            { image, name, type, author, language, description,price },
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
 return(
     <div></div>
 )}
