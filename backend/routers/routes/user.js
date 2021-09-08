const express = require("express");
const { createNewUser } = require("../controllers/user");

// define router
const userRouter = express.Router();

userRouter.post("/register", createNewUser);

module.exports = userRouter;

