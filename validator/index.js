
exports.createPostValidator =(req, res, next) => {
    req.check('title', 'Write a title').notEmpty();
    req.check('title', 'Title must be between 4 and 150 character').isLength({
        min: 4,
        max: 150
    });

    req.check('body', 'Write a body').notEmpty();
    req.check('body', 'Body must be between 4 and 2000 character').isLength({
        min: 4,
        max: 2000
    });

    const errors = req.validationErrors();

    if(errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({error: firstError});
    }

    next();
    
}

exports.userSignupValidator = (req, res, next) => {
    req.check("name", "Name is required").notEmpty();
    req.check("email", "Email must be between 3-32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4,
            max: 2000
        })
    
    req.check("password", "password is required");
    req.check('password')
        .isLength({min: 4})
        .withMessage("Password must contain at least 6 character")
        .matches(/\d/)
        .withMessage("Password must contain a number");

        const errors = req.validationErrors();

        if(errors) {
            const firstError = errors.map(err => err.msg)[0];
            return res.status(400).json({error: firstError});
        }
    
        next();
}