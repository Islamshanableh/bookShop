const express = require("express");
const { createNewUser } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", createNewUser);
userRouter.get("/", authentication,getInfo);
userRouter.put("/update", authentication,updateInfo);

module.exports = userRouter;
