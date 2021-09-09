const express = require("express");
const { CreatNewBook,
getAllBooks,
FindByCategory,
getBookByName,
getBookByAuthor } = require("../controllers/book");


const booksRouter = express.Router();

booksRouter.post("/createbook", CreatNewBook);
booksRouter.get("/allbooks", getAllBooks);
booksRouter.get("/typeOfBook/:type", FindByCategory);
booksRouter.get("/:name", getBookByName);
booksRouter.get("/:author", getBookByAuthor);


module.exports = booksRouter;
