const express=require('express');
//takes json and convert it to an object
const bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var Todo=require('./models/Todo');
var TodoUser =require('./models/todoUser');

var app=express();
//adding middleware
app.use(bodyParser.json());

app.post('/todos',(request, response)=>{
   var todoEntry=new Todo({
       text:request.body.text
   });
   todoEntry.save().then((doc)=>{
       response.status(200).send(doc);
   },(err)=>{
       response.status(500).send(err);
   });
});

app.listen(3000,()=>{
    console.log('started on port 3000');
});

module.exports={app};