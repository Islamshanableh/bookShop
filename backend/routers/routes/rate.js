const express = require("express");
const {addToRating}  = require("../controllers/rating");


const ratingRouter = express.Router();
ratingRouter.post("/", addToRating);

module.exports = ratingRouter;
