const Post = require('../models/post');

exports.getPost = (req, res) => {
    const post = Post.find()
    .select("_id title body")
    .then(posts => {
        res.json({posts})
    })
    .catch(error => console.log(error));
}

exports.createPost = (req, res) => {
    post = new Post(req.body);
    
    post.save().then(result => {
        res.json({
            post: result
        })
    });
}