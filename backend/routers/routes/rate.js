const express = require("express");
const {addToRating}  = require("../controllers/rating");
const {authentication}=require("../middlewares/authentication")

const ratingRouter = express.Router();
ratingRouter.post("/",authentication,addToRating);

module.exports = ratingRouter;
