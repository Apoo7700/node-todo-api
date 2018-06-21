const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoUserSchema = new Schema(
  {
    
    email: {
      type: String,
      trim: true,
      required:true,
      minlength:1
    }
  })

module.exports = mongoose.model('TodoUser', TodoUserSchema)