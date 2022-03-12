const mongoose = require('mongoose');

const dbUri = process.env.CONNECTION_STRING;


mongoose.connect(dbUri,{ useNewUrlParser: true, useUnifiedTopology: true},() => {
    console.log('The Database Connection is Up');
})


module.exports = mongoose.connection;