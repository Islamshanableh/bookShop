import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { numberContext } from "../../App";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";

export const ShoppingCart = () => {
  const [book, setBook] = useState([]);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState();
  const state  = useContext(userContext);
  const token = state.token;
 const cart = useContext(numberContext)

  const getBooks = ()=>{
    console.log(token);
    axios.get("http://localhost:5000/cart",{headers:{Authorization: `Bearer ${token}` }})
    .then((result)=>{
     setBook(result.data.message)
     setPrice(result.data.message.reduce((acc,elem,i)=>{
       return acc + parseInt((elem.bookId.price),10)
     },0))
    })
    .catch((err)=>{setBook([])
      setPrice(0)
      console.log(err)})
 }


  useEffect((
  )=>{getBooks()},[book])
  
  const deleteBook=(id)=>{
    cart.setNumber((cart.number)-1)
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
              <div className="book">
           <img className="img" src={element.bookId.image}/>

           <div className="book-info">
             <h3>{element.name}</h3>
             <span><Route
                exact
                path="/home"
                render={() => <Rate bookId={element._id} rateCount={element.rating}  />}
              /></span>
              </div>
                <button onClick={()=>{deleteBook(element._id)}}>Remove Item</button>
              </div>
            );
          })}
        </div>
      )}
      {`The total price is => ${price}`}
    </div>
  );
};
