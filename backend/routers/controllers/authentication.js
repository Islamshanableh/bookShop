const userModel = require("../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require("dotenv").config();

const Login = (req, res) => {
  const email = req.body.toLowerCase();
  const password = req.password;
  userModel.findOne({ email })
  .then((result) => {
    if (!result) {
      res.json({
        success: false,
        message: "The email doesn't exist",
      });
    }
   const check = bcrypt.compareSync(password,result.password)
   if(!check){
       res.json({
           success: false,
           message:"The password you’ve entered is incorrect"
       })
   }
  });
};

module.exports = { Login };
