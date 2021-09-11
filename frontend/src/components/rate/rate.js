import React, { useState, useEffect, useContext } from "react";
import { Rating } from "react-simple-star-rating";
import { userContext } from "../../App";

import axios from "axios";

export const Rate = ({ bookId , rateCount }) => {
  const state = useContext(userContext);
  const token = state.token;
  const value = rateCount.reduce(function (acc, number, index) {
    return acc + number;
  });
  
  const [rating, setRating] = useState(0);
  const handleRating = (count) => {
    setRating(count);
    axios
      .post(
        "http://localhost:5000/rate",
        { bookId, count },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        //console.log("The rating has been created successfully");
      })
      .catch((err) => {
        // console.log(
        //   "Error happened while creating a new rate, please try again"
        // );
      });
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ratingValue={value/rateCount.length}
        size={20}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
        className="foo" // Will remove the inline style if applied
      />
      
    </div>
  );
};
