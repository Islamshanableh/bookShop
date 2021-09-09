const rateModel = require("../../db/models/rate");

const addToRating = (req, res) => {
  const { userId, book ,count } = req.body;
  

  const Rate = new rateModel({ userId, book, count });

  Rate.save()
    .then((result) => {
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
