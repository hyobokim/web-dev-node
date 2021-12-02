const mongoose = require('mongoose'); // load mongoose library
const schema = mongoose.Schema({
  title: String,   // title property of type String
  rating: Number  // rating property of type number
}, {collection: 'movies'}); // which collection name
module.exports = schema;  // export schema
