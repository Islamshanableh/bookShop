const express = require("express");
const { addToCart } = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.post("/addToCart", addToCart);

module.exports = cartRouter;