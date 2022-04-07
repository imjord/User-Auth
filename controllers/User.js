const User = require('../models/User')


const UserController = {

    // get Users 
    getUsers(req,res){
        User.find().then(users => {
            if(users == []){
                console.log('users empty')
            } else {
                res.json(users)}
            })
    },

    createUsers(req,res){
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        newUser.save().then(savedData => res.send(savedData))
    }



}




module.exports = UserController;