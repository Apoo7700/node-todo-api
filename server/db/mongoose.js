var mongoose=require('mongoose');

//telling mongoose the promise lib to use
mongoose.Promise= global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports={mongoose};

//process.env.NODE_ENV is set to default 'production' by heroku