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

    // get single user

    getSingleUser(req,res){
        User.findById({_id: req.params.id}).then(data=> res.json(data));
    },

    createUsers(req,res){
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        newUser.save().then(savedData => res.send(savedData))
    },

    // delete user 
    deleteUser(req,res){
        User.deleteOne({_id: req.params.id}, {new: true}).then(data => res.json(data));
    },





}




module.exports = UserController;