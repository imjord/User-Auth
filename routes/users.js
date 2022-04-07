
const router = require('express').Router();
const { getUsers, createUsers } = require('../controllers/User');




router.get('/', getUsers);


// post make a user

router.post('/', createUsers);


module.exports = router;