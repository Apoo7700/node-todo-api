var {mongoose}=require('./db/mongoose');

var video=require('../models/health/Video');

var file=require('../models/health/File');

var file1=new file({
    fileName:'my file',
      url: 'c://file'
});

var user=require('../models/health/User');
var user1=new user({
    userName:'apoorva',
    userEmail:'apoo7700@abc.com'
});
var user2=new user({
    userName:'apoo',
    userEmail:'apoorsharma@abc.com'
});

var comment=require('../models/health/Comment');
var comment1=new comment({
    user:user1,
    description: 'cool'
});
var comment2=new comment({
    user:user2,
    description: 'good'
});

var video1 = new video({
      title: 'video title',
      description:'video description',
      file:file1,  
      user:user1,
      status:'Pending',    
      likes: ['apoo7700','apoorsharma'],
      tags: [user1,user2],
      comments:[comment1,comment2]
});

video1.save().then((doc)=>{
    console.log('video saved ',doc);
},(err)=>{
    console.log('error ',err);
})