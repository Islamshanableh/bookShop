const user = require("../../db/models/user");

const createNewUser = (req, res) => {
    const { firstName, lastName, country, phoneNumber, BirthDate,email,password ,favorite,cart} = req.body;
    const newUser = new user({
      firstName,
      lastName,
      country,
      phoneNumber,
      BirthDate,
      email,
      password,
      favorite,
      cart
    });
    
    newUser
    .save()
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "Success User Added",
        user: result,
      });
    })
    .catch((err) => {
      res.status(409);
      res.json({ success: false, message: "The email already exists" });
    });
  };
  
module.exports={createNewUser}