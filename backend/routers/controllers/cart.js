const cartModel = require("../../db/models/cart");

const addToCart = (req,res)=>{
    const {userId , bookId} = req.body;

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

module.exports = {addToCart}


