const expect=require('expect');
const request=require('supertest');

var {app}=require('../server');
var todo=require('../models/Todo');

describe('POST /todo',()=>{
    it('should create new todo',(done)=>{
        var text='test todo text';

        request(app).post('/todos')
        .send({text})
        .expect(200)
        .expect((response)=>{
            //check if the response is correct
            //i.e we are getting the expected response
            expect(response.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                //if some error while sending request
               return done(err);
            }
            //after checking the response checking if correct data got stored in db
            todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>{
                done(e);
            });
            
        })
    });

    it('should not create todo with invalid body data',(done)=>{
        request(app).post('/todos')
        .send({})
        .expect(500)
        .end((err,resp)=>{
            if(err){
                return done(err);
            }
            todo.find({text:null}).then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }).catch((e)=>{
                    done(e);
            });
        });
    })
});