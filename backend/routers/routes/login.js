const express = require("express");
const {Login , loginWithGoogle } = require("../controllers/authentication");


const loginRouter = express.Router();
loginRouter.post("/", Login);
loginRouter.post("/google", loginWithGoogle);

module.exports = loginRouter;
