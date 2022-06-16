const mongoose = require('mongoose')
const { Schema } = mongoose;
// https://mongoosejs.com/docs/guide.html#definition
// 1. create a schema
const unixSchema = new Schema({
  command:  String, // String is shorthand for {type: String}
  description: String,
  category: String,
});
// 2. create a model

const Unix = mongoose.model('Unix', unixSchema)
module.exports = Unix