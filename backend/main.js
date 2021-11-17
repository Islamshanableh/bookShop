const express = require('express');
const cors = require('cors');


const userRouter = require("../backend/routers/routes/user")
const loginRouter = require ("../backend/routers/routes/login")
const favoriteRouter=require("../backend/routers/routes/favourite")
const booksRouter = require("../backend/routers/routes/book")
const ratingRouter = require("../backend/routers/routes/rate")
const cartRouter = require("../backend/routers/routes/cart")
const messageRouter = require("../backend/routers/routes/sendMsg")
const app = express();

//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());


//app routers
app.use("/users",userRouter)
app.use("/login",loginRouter)
app.use("/books",booksRouter)
app.use("/favorite",favoriteRouter)
app.use("/rate",ratingRouter)
app.use("/cart",cartRouter)
app.use("/sendMsg", messageRouter);


module.exports = app;