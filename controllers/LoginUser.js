const User = require('../models/User')
const bcrpyt = require('bcrypt');

const LoginController = {
    
    async isLoggedIn(req,res){
        const { username, password } = req.body
        // Check if username and password is provided
        if (!username || !password) {
          return res.status(400).json({
            message: "Username or Password not present",
          })
        }
        try {
          const user = await User.findOne({ username })
          if (!user) {
            res.status(400).json({
              message: "Login not successful",
              error: "User not found",
            })
          } else {
            // comparing given password with hashed password
            bcrpyt.compare(password, user.password).then(function (result) {
              result
                ? res.status(200).json({
                    message: "Login successful",
                    user,
                  })
                : res.status(400).json({ message: "Login not succesful" })
            })
          }
        } catch (error) {
          res.status(400).json({
            message: "An error occurred",
            error: error.message,
          })
        }
      }

}


module.exports = LoginController;