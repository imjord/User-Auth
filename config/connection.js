const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/userauth');


module.exports = mongoose.connection;