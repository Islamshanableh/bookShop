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
