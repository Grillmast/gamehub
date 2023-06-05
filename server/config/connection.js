const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamehub'); 

module.exports = mongoose.connection;