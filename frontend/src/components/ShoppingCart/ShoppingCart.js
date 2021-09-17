import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { numberContext } from "../../App";
import { MdAddShoppingCart } from "react-icons/md"
import "./ShoppingCart.css"

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
  )=>{getBooks()},[])
  
  const deleteBook=(id)=>{
    cart.setNumber((cart.number)-1)
    axios.delete(`http://localhost:5000/cart/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result)=>{
      if(result.data.success){
        getBooks()
      }
     })
    .catch((err)=>{setStatus(<div>{`some thing wrong`}</div>)})
  }

  const disc=(code)=>{
    console.log(code);
    if(code.toLowerCase()=="meraki"){
    setPrice(price/2)
    } else{
           setPrice(book.reduce((acc,elem,i)=>{
       return acc + parseInt((elem.bookId.price),10)
     },0))
    }
  }
  return (
    <div>
      {!book.length ? (
        
        <div>
          <div><MdAddShoppingCart size="5em" className="p"/> </div>
          Shopping cart is Empty
          </div>
      ) : (
        <div>
          {book.map((element, i) => {
              
            return (
              <div className="cart">

           <img className="imgCart" src={element.bookId.image}/>
           <div>Price: {element.bookId.price}JD</div>
             <h3>{element.bookId.name}</h3>
              <button onClick={()=>{deleteBook(element._id)}}>Remove Item</button>

              </div>
            );
            
          })}
           <div className="l"> The total price is {price}JD</div>
           <div><input type="text" placeholder="enter youre discount code" onChange={(e)=>{disc(e.target.value)}}></input></div>
           <div><button>Bay Now</button></div>
        </div>
      )}
    
    </div>
  );
};
