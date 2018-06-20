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
    db.collection('Todos').find().count().then((count)=>{
        console.log(`count todos : ${count}`);
    },(err)=>{
        console.log('unable to fetch todos ',err);
    });

   db.collection('Todos').findOneAndUpdate({
       _id:new ObjectId('5b28c038e70b937d34b37cd3')
   },{
       $set:{
           completed:true
       }
   },{
       returnOriginal:false
   }).then((result)=>{
       console.log(result);
   })

   db.collection('Users').findOneAndUpdate({name:'rachit'},{
       $set:{
           name:'apoorva'
       },
       $inc:{
         age: 1 
       }
   },{
       returnOriginal:false
   }).then((result)=>{
       console.log(result);
   })
    //closes conenction
   // db.close();
});