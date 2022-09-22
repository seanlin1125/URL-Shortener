const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  shortURL: {
    type: String,
    required: true,
    unique: true
  },
  originURL: {
    type: String,
    required: true,
    unique: true
  }
})
module.exports = mongoose.model('URL', urlSchema)