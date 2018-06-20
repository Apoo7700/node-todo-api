var mongoose=require('mongoose');

//telling mongoose the promise lib to use
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};