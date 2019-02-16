const Post = require('../models/post');

exports.getPost = (req, res) => {
    res.json({
        posts: [
            {title: "Node is awesome"},
            {title: "React is cool."}
        ]
    });
}

exports.createPost = (req, res) => {
    post = new Post(req.body);
    
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        });
    });
}