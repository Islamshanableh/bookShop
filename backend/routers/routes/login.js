const express = require("express");
const {Login} = require("../controllers/authentication");


const loginRouter = express.Router();
loginRouter.post("/", Login);

module.exports = loginRouter;
