
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { AddCart } from "../cart/cart";
import { Route } from "react-router-dom";
import { Rate } from "../rate/rate";


export const  FavBage =()=> {

    const [book, setBook] = useState();
    const [status, setStatus] = useState();

    const state = useContext(userContext);
    const token = state.token;


    const getAllFavo =()=>{
      console.log("ssssssssssss");
      axios
      .get("http://localhost:5000/favorite/getAllFav/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data.message);
      })
      .catch((err)=>{setBook([])
      console.log(err)
        console.log("servr error")})
    }
   
      useEffect((
        )=>{ getAllFavo()},[])

      const deleteBook=(id)=>{

        axios.delete(`http://localhost:5000/favorite/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then( 
          (res)=>{
            getAllFavo()
            setStatus(<div>{`Success deleted the book with id=>${id}`}</div>)})
        .catch((err)=>{setStatus(<div>Some thing wrong</div>)})
    
      }

      return (
        <div>
          {!book ? (
            <div> favourite is Empty</div>
          ) : (
            <div>
            {book.map((element, i) => {
                
              return (
                <div className="book">
                <div className="book1">
                 <img className="imgooooooo" src={element.bookId.image}/>
                  
                
      
                    <div className="desc">
                      <h3>Description</h3>
                      {element.bookId.description}
                      <div className="price">Price: {element.bookId.price}JD</div>
                      
                    
                    <div > <Route
                      exact
                      path="/favorite"
                      render={() => <AddCart bookId={element.bookId._id} />}
                    /></div>
                   
                    </div>
                   </div>
                    <div className="book-info">
                   <h3 className="hover">{element.bookId.name}</h3>
                
                    </div>
                  </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };


  

