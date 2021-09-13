import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import axios from "axios";

const Dashboard = () => {
  const state = useContext(userContext);
  const token = state.token;
  const [book, setBook] = useState([]);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [author, setAuthor] = useState();
  const [language, setLanguage] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [success, setSuccsess] = useState(null);
  const getAll = () => {
    axios
      .get(
        "http://localhost:5000/books/myBook",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBook([...res.data.book]);
      });
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/books/myBook",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBook([...res.data.book]);
      });
  }, []);
  const updateBook = (element) => {
    console.log(element);
    axios
      .put(
        `http://localhost:5000/books/update/${element}`,
        {
          image: image,
          name: name,
          type: type,
          author: author,
          language: language,
          price: price,
          description: description,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBook([...res.data.book]);
        getAll();
        setSuccsess(res.data.message);
      });
  };
  return (
    <div>
      <div>
        <h1>all books</h1>
        {book &&
          book.map((element, index) => {
            return (
              <div key={element._id}>
                <br></br>
                <br></br>
                <label>image</label>{" "}
                <input
                  type="text"
                  defaultValue={element.image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>name</label>
                <input
                  type="text"
                  defaultValue={element.name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>type</label>{" "}
                <input
                  type="text"
                  defaultValue={element.type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>author</label>{" "}
                <input
                  type="text"
                  defaultValue={element.author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>language</label>{" "}
                <input
                  type="text"
                  defaultValue={element.language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>price</label>{" "}
                <input
                  type="text"
                  defaultValue={element.price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                ></input>
                <br></br>
                <label>description</label>{" "}
                <input
                  type="text"
                  defaultValue={element.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
                <br></br>
                <button
                  onClick={() => {
                    updateBook(element._id);
                  }}
                >
                  update
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
