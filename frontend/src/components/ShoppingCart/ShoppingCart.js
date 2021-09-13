import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";

export const ShoppingCart = () => {
  const [book, setBook] = useState([]);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState();

  const state  = useContext(userContext);
  const token = state.token;






  const deleteBook=(id)=>{
    axios.delete(`http://localhost:5000/cart/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result)=>{
      getBooks()
      setStatus(<div>{`deleted book`}</div>)})
    .catch((err)=>{setStatus(<div>{`some thing wrong`}</div>)})
  }
  return (
    <div>
      {!book.length ? (
        <div>Shopping cart is Empty</div>
      ) : (
        <div>
          {book.map((element, i) => {
              
            return (
              <div key={element._id}>
                {element.bookId.image}
                <br></br> 
                {element.bookId.name}
                <br></br>
                {element.bookId.type}
                <br></br>
                {element.bookId.author}
                <br></br>
                {element.bookId.description}
                <br></br>
                {element.bookId.language}
                <br></br>
                {element.bookId.price}
                <br></br>
                <button onClick={()=>{deleteBook(element._id)}}>X</button>
              </div>
            );
          })}
        </div>
      )}

      {`The total price is => ${price}`}

    </div>
  );
};
