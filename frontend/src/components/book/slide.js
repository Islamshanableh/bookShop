import React, { useState,useEffect } from "react";
import axios from "axios";





const SlideShow = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/books/").then((res) => {
        setBooks([...res.data.books]);
      });
    }, []);
 

  

  return (
    <div className="slide">
      
    </div>
   
  );
};

export default SlideShow;