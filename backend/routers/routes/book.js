const express = require("express");
const { CreatNewBook,
getAllBooks,
FindByCategory,
getBookByName } = require("../controllers/book");


const booksRouter = express.Router();

booksRouter.post("/createbook", CreatNewBook);
booksRouter.get("/allbooks", getAllBooks);


module.exports = loginRouter;
