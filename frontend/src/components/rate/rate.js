import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

import axios from "axios";

export const Rate = ({ userId, book }) => {
  const [rating, setRating] = useState(0);
  const handleRating = (count) => {
    setRating(count);
    axios
      .post("http://localhost:5000/rate", { userId, book, count })
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
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
        className="foo" // Will remove the inline style if applied
      />
      {rating}
    </div>
  );
};
