const cartModel = require("../../db/models/cart");

const addToCart = (req,res)=>{
  console.log(req.token);
    const {bookId} = req.body;
    const userId = req.token.userId
    
    const cart = new cartModel ({
        userId,
        bookId

    });

    cart.save().then((result)=>{
        res.status(201).json({
            success: true,
            message: `Success book Added`,
            book: result,
          })
    }).catch((err) => {
        res.status(409).json({
          success: false,
          message: `error! `,
          err: err,
        });
      });
}

//.populate("author", "firstName lastName -_id")

const FindByUserId = (req,res)=>{
  const userId = req.token.userId
  cartModel.find({userId})
  .populate("bookId","image name type author description language price-_id")
  .exec()
  .then((result)=>{
    if(!result.length){
      return res.status(409).json({
        success: false,
        message: `Shopping cart is Empty`,
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

const deleteArticleById = (req, res) => {

};

module.exports = {addToCart,FindByUserId,deleteArticleById}


