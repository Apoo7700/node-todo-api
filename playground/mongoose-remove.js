const {mongoose}=require('../server/db/mongoose');
const Todo= require('../server/models/Todo');
const TodoUser =require('../server/models/TodoUser');
const {ObjectId}=require('mongodb');

//  //remove all
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id:'5b2943e7b00f1f3d6c4cb820'
}).then((result)=>{
    console.log('removed :: ',result);
});

// Todo.findByIdAndRemove('5b293e75f2dc8c1bb8eb25a7').then((entry)=>{
//     console.log('removed :: ',entry);
// });