const userSchema = require("../../db/models/user");

const createNewUser = (req, res) => {
    const { firstName, lastName, country, phoneNumber, BirthDate,email,password} = req.body;
    const newUser = new userSchema({
      firstName,
      lastName,
      country,
      phoneNumber,
      BirthDate,
      email,
      password,
      
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
      console.log(err)
      res.status(409);
      res.json({ success: false, message: "The email already exists" });
    });
  };
  
module.exports={createNewUser}