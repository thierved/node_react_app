exports.getPost = (req, res) => {
    res.json({
        posts: [
            {title: "Node is awesome"},
            {title: "React is cool."}
        ]
    });
}