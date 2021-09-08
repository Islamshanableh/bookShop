const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const authentication = (req , res , next)=> {

    if (!req.headers.authorization)
    {
        return res.status(403).json({
            success: false,
            message: `Forbidden`
        });

    }

}