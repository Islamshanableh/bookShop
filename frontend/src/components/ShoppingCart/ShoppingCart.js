import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";

export const ShoppingCart = () => {
  const [book, setBook] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();

  const state  = useContext(userContext);
  const token = state.token;


  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {cd 
        setBook(res.data.message);
        setPrice((res.data.message).reduce((acc,elem,i)=>{
          // console.log();
          return  acc+parseInt((elem.bookId.price),10)
        },0))
      });
  },[status]);



  const deleteBook=(id)=>{
    axios.delete(`http://localhost:5000/cart/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res)=>{setStatus(<div>{`Success deleted the book with id=>${id}`}</div>)})
    .catch((err)=>{setStatus(<div>Some thing wrong</div>)})

  }

  return (
    <div>
      {!book ? (
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
      <div><h1>`the total price is {price}`</h1></div>
    </div>
  );
};
