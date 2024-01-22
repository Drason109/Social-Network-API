//connects to mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Social-Network');

module.exports = mongoose.connection;