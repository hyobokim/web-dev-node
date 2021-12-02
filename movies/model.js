const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('MovieModel', schema); // create mongoose model from schema
module.exports = model; // export
