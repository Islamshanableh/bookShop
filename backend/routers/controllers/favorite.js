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


const FindByUserId = (req, res) => {
  const userId = req.token.userId;
  favoriteModel.find({userId}).populate("bookId","image name type author description language price-_id")
  .exec().then((result) => {
    if(!result.length){
      return res.status(409).json({
        success: false,
        message: `no favourites yet `,
        err: err,
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
}

module.exports = { addToFavorite ,FindByUserId};
