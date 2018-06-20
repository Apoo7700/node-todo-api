//lets u connect to mongo server
const MongoClient=require('mongodb').MongoClient;

//object destructuring 
//creating new variable from object data
var user={name:'apoorva',age:26};
var {name}=user;
console.log('name ',name);

//connect to db
//1st arg: db url
//2nd arg: callback function
//TodoApp is name of the database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('unable to connect to db');
    }
    console.log('connect to db');
    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=>{
        if(err){
            console.log('unab;e to insert ',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    //closes conenction
    db.close();
});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('unable to connect to db');
    }
    console.log('connect to db');
    db.collection('Users').insertOne({
        name:'apoorva',
        age:26,
        location:'yemlur bangalore'
    },(err,result)=>{
        if(err){
            console.log('unable to insert ',err)
        }
       // console.log(result.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    //closes conenction
    db.close();
});