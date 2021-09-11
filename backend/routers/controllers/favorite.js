const favoriteModel = require("../../db/models/favorite");

const addToFavorite = (req, res) => {
  const { userId, bookId } = req.body;

  const favorite = new favoriteModel({
    userId,
    bookId,
  });

  favorite
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Success book Added`,
        book: result,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: `error! `,
        err: err,
      });
    });
};


const FindByUserId = (req, res) => {}

module.exports = { addToFavorite };
