
const router = require('express').Router();
const { getUsers, createUsers, deleteUser, getSingleUser } = require('../controllers/User');




router.get('/', getUsers);


// post make a user

router.post('/', createUsers);

router.get('/:id', getSingleUser)
router.delete('/:id', deleteUser)


module.exports = router;