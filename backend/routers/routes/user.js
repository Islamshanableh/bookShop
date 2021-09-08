const express = require("express");
const { createNewUser } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/register", createNewUser);

module.exports = userRouter;
