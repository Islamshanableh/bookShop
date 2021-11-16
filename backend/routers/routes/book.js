const express = require("express");
const { authentication } = require("../middlewares/authentication");
const {
  CreatNewBook,
  getAllBooks,
  FindByCategory,
  getBookByName,
  getBookByAuthor,
  updateBook,
  getBookByUserId,
  getBookById,
} = require("../controllers/book");


const booksRouter = express.Router();

booksRouter.post("/createbook", authentication , CreatNewBook);
booksRouter.get("/", getAllBooks);
booksRouter.get("/typeOfBook/:type", FindByCategory);
booksRouter.get("/nameOfBook/:name", getBookByName);
booksRouter.get("/nameOfAuthor/:author", getBookByAuthor);
booksRouter.get("/myBook", authentication,getBookByUserId);
booksRouter.put("/update/:id", authentication,updateBook);
booksRouter.get('/Book/:id' , getBookById);


module.exports = booksRouter;
