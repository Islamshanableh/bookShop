const express = require("express");
const addToRating  = require("../controllers/rating");


const ratingRouter = express.Router();
ratingRouter.post("/rating", addToRating);

module.exports = ratingRouter;
