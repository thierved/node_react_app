const express = require('express');
const morgan = require('morgan');
const app = express();
const getPost = require('./routes/post');

app.use(morgan("dev"));

app.use('/', getPost);

app.listen(3000, () => {
    console.log("You're amazing.");
})