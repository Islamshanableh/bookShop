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
    if(!result.length){
  return    res.json({
        success:false,
        message: "incorrect category"
      })
    }
    res.json({
      succes: true,
      message: result
    });
  }).catch((err)=>{
    res.json({
      success:false,
      message: "server error"
    })
  })
};

const getBookByName =(req,res)=>{
  const name = req.params.name;
  bookModel.find({ name }).then((result) => {
    if(!result.length){
    return  res.json({
        success:false,
        message: "incorrect  name of book"
      })}
    res.json({
      succes: true,
      message: result
    });
  }).catch((err)=>{
    res.json("server error")
  })
}

const getBookByAuthor = (req,res)=>{
  const author = req.params.author;
  bookModel
    .find({author })
    .then((result) => {
      if(!result.length){
       return res.json({
          success:false,
          message: "incorrect  name of Author"
        })
      }
      res.status(200);
      res.json({
        success: true,
        massage: `all the books by${author}`,
        articles: result,
      });
    })
    .catch((err) => {
     res.json("server error")
    });
}
const getBookByUserId=(req,res)=>{
  const userId = req.token.userId
  bookModel
    .find({userId})
    .then((result) => {
      if(!result.length){
       return res.json({
          success:false,
          message: "incorrect userId"
        })
      }
      res.status(200);
      res.json({
        success: true,
        massage: `all the books by userId`,
        book: result,
      });
    })
    .catch((err) => {
     res.json("server error")
    });

}

module.exports = {
  CreatNewBook,
  getAllBooks,
  FindByCategory,
  getBookByName,
  getBookByAuthor
};
