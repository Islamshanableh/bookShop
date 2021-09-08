const bookModel = require("../../db/models/book");
const NewBook = (req, res) => {

const {
    image,
    name,
    type,
    author,
    description,
    language,
    price,
    rating

}=req.body 

const Book = new bookModel({
    image,
    name,
    type,
    author,
    description,
    language,
    price,
    rating

})
Book.save()
.then((result) => {
    res.status(200).json({
      success: true,
      message: `Success book Added`,
      book : result,
    });
  })
  .catch((err) => {
   
    res.status(409).json({
      success: false,
      message: `book already exist `,
      err: err,
    });
  });
 
}
