const express = require("express");
const { addToCart } = require("../controllers/cart");
const {authentication}=require("../middlewares/authentication")

const cartRouter = express.Router();

cartRouter.post("/", authentication,addToCart);

module.exports = cartRouter;