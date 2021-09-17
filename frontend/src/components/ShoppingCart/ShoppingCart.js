import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { numberContext } from "../../App";
import { BsCheckCircle } from "react-icons/bs";
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
    
    axios.get("http://localhost:5000/cart",{headers:{Authorization: `Bearer ${token}` }})
    .then((result)=>{
     setBook(result.data.message)

     setPrice(result.data.message.reduce((acc,elem,i)=>{
       return acc + parseInt((elem.bookId.price),10)
     },0))
    })
    .catch((err)=>{setBook([])
      setPrice(0)
     })
 }


  useEffect((
  )=>{getBooks()},[])
  
  const deleteBook=(id,bookId)=>{

    cart.setNumber((cart.number)-1)
   axios.delete(
    `http://localhost:5000/cart/${id}`,
    
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    data:   {bookId} },
  ) 
.then((result)=>{
      if(result.data.success){
        getBooks()
      }
     })
    .catch((err)=>{setStatus(<div>{`some thing wrong`}</div>)})
  }

  const disc=(code)=>{

    if(code.toLowerCase()=="meraki"){
    setPrice(price/2)
    setStatus(<BsCheckCircle></BsCheckCircle>)
    } else{
          return 
    }
  }
  return (
    <>
    <div className="contaner">
      {!book.length ? (
        
        <div>
          <div><MdAddShoppingCart size="5em" className="p"/> </div>
          Shopping cart is Empty
          </div>
      ) : (
<>
          {book.map((element, i) => {
              
            return (
              <div className="card"> 
              <img src={element.bookId.image} className="img9"/>
              <h3>{element.bookId.name}</h3>
              <p class="price231">Price: {element.bookId.price}JD</p>
              <p><button  onClick={()=>{deleteBook(element._id , element.bookId._id)}}>Remove Item</button></p>
           
              </div>
               
            );
            
          })}

      </>
      )}
    
    </div>
    <div className="devider">
    <div className="total_Price">
    <span className="span"> The total price is {price}JD</span><br/>
           <input className="pppp" type="text" placeholder="Enter youre discount code" onChange={(e)=>{disc(e.target.value)}}></input><div className="ll">{status}</div><br/>
           <button className="oooo">Bay Now</button>
           </div>
    </div>
 
           </>
  );
};
