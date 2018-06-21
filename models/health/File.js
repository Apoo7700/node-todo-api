const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    url: {
        type: String,
        required: true
    }
  }
)

module.exports = mongoose.model('File', FileSchema)
