const express = require("express");
const { CreatNewBook,
getAllBooks,
FindByCategory,
getBookByName,
getBookByAuthor } = require("../controllers/book");


const booksRouter = express.Router();

booksRouter.post("/createbook", CreatNewBook);
booksRouter.get("/", getAllBooks);
booksRouter.get("/typeOfBook/:type", FindByCategory);
booksRouter.get("/nameOfBook/:name", getBookByName);
booksRouter.get("/nameOfAuthor/:author", getBookByAuthor);


module.exports = booksRouter;
