const express = require("express");
const { createNewUser,getInfo,updateInfo } = require("../controllers/user");
const {authentication}=require("../middlewares/authentication")

const userRouter = express.Router();

userRouter.post("/", createNewUser);
userRouter.get("/", authentication,getInfo);
userRouter.put("/update", authentication,updateInfo);

module.exports = userRouter;
