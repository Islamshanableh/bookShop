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

  const getInfo = (req, res)=>{
    const id = req.token.userId
    userSchema
    .findById(id)
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The user not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The user found `,
        userInfo: [result],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        
      });
    });
  }

  const updateInfo = (req, res) => {
    const id = req.token.userId
  
    userSchema
      .findByIdAndUpdate(id, req.body, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `The user => not found`,
          });
        }
        res.status(202).json({
          success: true,
          message: ` Success user updated`,
          userInfo: [result]
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          // err: err,
        });
      });
  };
  
module.exports={createNewUser,getInfo,updateInfo}