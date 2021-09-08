const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const userRouter = require("../backend/routers/routes/user")
const loginRouter = require ("../backend/routers/routes/login")
const app = express();

//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());


//app routers
app.use("/users",userRouter)
app.use("/login",loginRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
