const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    user:{
      type: Schema.Types.Mixed, 
      ref: 'User', 
      required: true 
    },
    date: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('Comment', CommentSchema)