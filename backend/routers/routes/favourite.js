const express = require("express")
const {addToFavorite}=require("../controllers/favorite")
const favoriteRouter=express.Router()


favoriteRouter.post("/",favoriteRouter)

module.exports = {addToFavorite};