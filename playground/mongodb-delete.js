//lets u connect to mongo server
//const MongoClient=require('mongodb').MongoClient;

var {MongoClient,ObjectId}=require('mongodb');

//object destructuring 
//creating new variable from object data
var user={name:'apoorva',age:26};
var {name}=user;
console.log('name ',name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('unable to connect to db');
    }
    console.log('connect to db');
    //returns mongo db cursor which we are converting to array, to array returns a promise
    // db.collection('Todos').find({_id:new ObjectId("5b2809f153fb081478c1aacd")}).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch todos ',err);
    // });
    // delete many
//    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//         console.log(result);
//    })
    //delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })
    //find one and delete
    db.collections('Todos').findOneAndDelete({text:'Eat lunch'});
    //closes conenction
   // db.close();
});