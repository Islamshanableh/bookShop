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
        <div className="naif">
          {book.map((element, i) => {
              
            return (
              <div className="cont">

              <div className="cart5">
            <div className="imm">
           <img className="imgCart" src={element.bookId.image}/>
           </div>
           <div className="bok">
           <h3>{element.bookId.name}</h3>
           <span>Price: {element.bookId.price}JD</span>
           </div>
           <div className="X">
              <button onClick={()=>{deleteBook(element._id , element.bookId._id)}}>Remove Item</button>
              </div>
              </div>
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
