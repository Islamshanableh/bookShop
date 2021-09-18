const rateModel = require("../../db/models/rate");
const bookSchema = require("../../db/models/book");
const addToRating = (req, res) => {
  const { bookId, count } = req.body;
  const userId = req.token.userId;

  const Rate = new rateModel({ userId, bookId, count });

  Rate.save()
    .then(async (result) => {
      await bookSchema.findByIdAndUpdate(bookId, { $push: { rating: count } });
      res.status(200).json({
        success: true,
        message: `Success rate  Added`,
        book: result,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: `server error `,
        err: err,
      });
    });
};

module.exports = { addToRating };
