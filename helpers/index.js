exports.createPostValidator =(req, res, next) => {
    check('title', 'Write a title').notEmpty();
    check('title', 'Title must be between 4 and 150 character').isLenght({
        min: 4,
        max: 150
    });

    check('body', 'Write a body').notEmpty();
    check('body', 'Body must be between 4 and 2000 character').isLenght({
        min: 4,
        max: 2000
    });

    const errors = req.validationErrors();

    if(error) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({error: firstError});
    }
    
}