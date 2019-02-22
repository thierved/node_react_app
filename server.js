const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const postRouter = require('./routes/post');
const authRouter = require('./routes/auth');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
    console.log('MongoDB connected!');
});

mongoose.connection.on('error', err => console.log('Error' + err))

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(expressValidator());

app.use('/', postRouter);
app.use('/', authRouter);

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log("You're amazing.");
});