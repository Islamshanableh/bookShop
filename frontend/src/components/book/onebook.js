import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, useParams } from "react-router";
import { Button ,Image, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './onebook.css'
import { Rate } from "../rate/rate";

export const OneBook = () => {
  let idd = useParams().id;
  const [book, setBook] = useState();
  const [type , setType] = useState();
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/Book/${idd}`)
      .then((result) => {
        setBook(result.data.book[0]);
        
        console.log("typeee",result.data.book[0].type);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);


  useEffect( async ()=>{
      await axios.get(`http://localhost:5000/books/typeOfBook/${book && book.type}`).then((result) => {
        setType(result.data);
        console.log("cta",result.data);
        
      })
      .catch((err) => {
        console.log("Error", err);
      });
  } , [])

  return (
    <div style={{display:"flex"}}>
      <div className="imgDetails">
        <Container>
          <Row>
            <Col >
              <Image src={book && book.image} thumbnail />
            </Col>
          </Row>
        </Container>
        <p className="nameBook">{book && book.name}</p>
        <Route
                exact
                path="/Book"
                render={() => <Rate bookId={book && book._id} rateCount={book && book.rating}  />}
              />
        <Button variant="outline-warning" style={{width:"150px" , margin:"auto" , fontWeight:"bold"}} >Add to cart</Button>

      </div>
      <div className="detailss">
          <label className="labelBook">About Book</label>
          <p className="descriptionBook">{book && book.description}</p>
          <label> Book type</label>
          <p>{book && book.type} </p>
      </div>
      <div className="SimilaBooks">
         {/* {type && type.book}  */}
         
         {"mmmmmmmmmmmm"}
 
      </div>

           
    </div>
  );
};
