const express = require('express');
const app = express();
let Post = require("./data/Post");
let Comments=require("./data/Comment");
app.use(express.json());







app.get('/api/posts', (req, res) => {
    res.json(Post);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/posts/:id', (req, res) => {
    let id=req.params.id;
    let post=Post.find(p=>p.id==id);
    res.json(post);
});

app.post('/api/posts', (req, res) => {
    let newPost={
   
        title:req.body.title,
        body:req.body.body,
        likeCount:0
    }
    Post.push(newPost);
    res.json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
    let id=req.params.id;
    let post=Post.find(p=>p.id==id);
    post.title=req.body.title;
    post.body=req.body.body;
    post.likeCount=req.body.likeCount;
    res.json(post);
})

app.delete('/api/posts/:id', (req, res) => {
    let id=req.params.id;
    Post=Post.filter(p=>p.id!=id);
    res.json(Post);
});

app.get('/api/posts/:id/comments', (req, res) => {
    let postId=req.params.id;
    let comments=Comments.filter(c=>c.postId==postId);
    res.json(comments);
})

app.post('/api/posts/:id/comments', (req, res) => {})

app.get('/api/posts/comments/:username', (req, res) => {
    let username=req.params.username;
    let comments=Comments.filter(c=>c.username==username);
    res.json(comments);

})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});