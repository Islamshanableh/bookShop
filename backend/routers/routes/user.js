const express = require("express");
const { createNewUser } = require("../controllers/user");

// define router
const usersRouter = express.Router();
