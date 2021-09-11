const express = require("express")
const {addToFavorite,FindByUserId}=require("../controllers/favorite")
const favoriteRouter=express.Router()
const {authentication}=require("../middlewares/authentication")

favoriteRouter.post("/",authentication,addToFavorite)

module.exports = favoriteRouter;