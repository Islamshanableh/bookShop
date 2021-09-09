import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

import axios from "axios";

export const Rate = ({ userId, book }) => {
    const [rating, setRating] = useState(0); 
    const handleRating = (count) => {
      setRating(count);
  };