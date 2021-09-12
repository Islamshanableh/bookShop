const express = require("express");
const { addToCart,FindByUserId,deleteArticleById } = require("../controllers/cart");
const {authentication}=require("../middlewares/authentication")

const cartRouter = express.Router();

cartRouter.post("/", authentication,addToCart);
cartRouter.get("/",authentication,FindByUserId)
cartRouter.delete("/:id",authentication,deleteArticleById)


module.exports = cartRouter;