require('./config/config');

const express=require('express');
const _=require('lodash');
//takes json and convert it to an object
const bodyParser=require('body-parser');

var {ObjectId}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var Todo=require('./models/Todo');
var TodoUser =require('./models/TodoUser');

var app=express();
//adding middleware
app.use(bodyParser.json());
var port=process.env.PORT;

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

app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;

    if(!ObjectId.isValid(id)){
        return  res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((result)=>{
        if(!result){
            return res.status(404).send();
        }
        res.send(result);
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.patch('/todos/:id',(req,res)=>{
    var id=req.params.id;
    //lets u pick only required properties from an object
    //has subset of user request
    var body=_.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id)){
        return  res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt= new Date().getTime();
    }else{
        body.completed=false;
        body.completedAt=null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((result)=>{
        if(!result){
            return res.status(404).send();
        }
        res.send(result);
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectId.isValid(id)){
        return  res.status(404).send();
    }
    Todo.findById(id).then((result)=>{
        if(!result){
            return res.status(404).send();
        }
        res.send(result);
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.get('/todos',(request,response)=>{
    Todo.find().then((todos)=>{
        response.status(200).send({todos});
    },(err)=>{
        response.status(500).send(err);
    });
});

app.listen(port,()=>{
    console.log(`started on port ${port}`);
});

module.exports={app};