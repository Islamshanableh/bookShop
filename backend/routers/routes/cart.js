const express = require("express");
const { addToCart,FindByUserId } = require("../controllers/cart");
const {authentication}=require("../middlewares/authentication")

const cartRouter = express.Router();

cartRouter.post("/", authentication,addToCart);
cartRouter.get("/",authentication,FindByUserId)


module.exports = cartRouter;