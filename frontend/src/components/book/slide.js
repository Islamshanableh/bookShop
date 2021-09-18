import React, { useState,useEffect } from "react";
import {Slide} from "react-slideshow-image";
import axios from "axios";
import 'react-slideshow-image/dist/styles.css'




const SlideShow = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/books/").then((res) => {
        setBooks([...res.data.books]);
      });
    }, []);
 

  const properties = {
    duration: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };

  return (
    <div className="slide" style={{marginTop:"80px"}}>
      <div>
      <Slide {...properties}>
        {books &&
        books.map((element, index) => {
          return(
            
          <div className="style" ><img src= {element.image} style={{borderRadius:"5px"}}></img></div>
        
         
        );
    })}
       </Slide>
      </div>
    </div>
   
  );
};

export default SlideShow;