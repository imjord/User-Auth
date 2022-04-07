const { isLoggedIn } = require('../controllers/LoginUser');

const router = require('express').Router();



router.post('/', isLoggedIn);



module.exports = router;