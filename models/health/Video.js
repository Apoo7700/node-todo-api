const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
      },
    file:{
        type: Schema.Types.Mixed, 
        ref: 'File', 
        required: true 
    },  
    user:{
        type: Schema.Types.Mixed, 
        ref: 'User', 
        required: true 
    },
    status: {
        type: String,
         required: true, 
         enum: ['Approved', 'Pending', 'Rejected']
      },    
    likes: [String],
    tags: [{type: Schema.Types.Mixed, ref: 'User'}],
    comments:[{type: Schema.Types.Mixed, ref: 'Comment'}]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Video', VideoSchema)