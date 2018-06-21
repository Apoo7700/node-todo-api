const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Todo = new Schema({
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports=mongoose.model('Todo',Todo);