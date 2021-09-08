const bookModel = require("../../db/models/book");

const CreatNewBook = (req, res) => {
  const { image, name, type, author, description, language, price, rating } =
    req.body;

  const Book = new bookModel({
    image,
    name,
    type,
    author,
    description,
    language,
    price,
    rating,
  });
  Book.save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Success book Added`,
        book: result,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: `book already exist `,
        err: err,
      });
    });
};

// this function return all books
const getAllBooks = (req, res) => {
  bookModel
    .find({})
    .then((books) => {
      res.status(200).json({
        success: true,
        message: `All the books `,
        books: books,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

const FindByCategory = (req, res) => {
  const type = req.params.type;
  bookModel.find({ type }).then((result) => {
    res.json({
      succes: true,
      message: result
    });
  }).catch((err)=>{
    res.json({
      success:false,
      message: "incorrect category"
    })
  })
};

const getBookByName =(req,res)=>{
  const name = req.params.name;
  bookModel.find({ name }).then((result) => {
    res.json({
      succes: true,
      message: result
    });
  }).catch((err)=>{
    res.json({
      success:false,
      message: "incorrect name of book"
    })
  })
}

module.exports = {
  CreatNewBook,
  getAllBooks,
  FindByCategory,
  getBookByName
};
