const {mongoose}=require('../server/db/mongoose');
const Todo= require('../server/models/Todo');
const TodoUser =require('../server/models/TodoUser');
const {ObjectId}=require('mongodb')

var id='5b293e75f2dc8c1bb8eb25a7';

if(!ObjectId.isValid(id)){
    console.log('Id not valid');
}

Todo.find({
    _id:id
}).then((result)=>{
    console.log(`result :: ${result}`);
})

Todo.findOne({
    _id:id
}).then((result)=>{
    console.log('find one result ',result);
})

Todo.findById(id).then((result)=>{
    if(!result){
        return console.log('id not found');
    }
    console.log('find Id result ',result);
}).catch((e)=>{
    console.log(e.message);
})

var userId='5b2947a9e7ec3f4d94f8e648oooo';
TodoUser.findById(userId).then((user)=>{
    if(!user){
       return console.log('User id not found');
    }
    console.log(`user found ${user}`);
}).catch((e)=>{
    console.log(e.message);
})