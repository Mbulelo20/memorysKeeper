const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const  colors = require("colors");

const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json({limit: '50mb'})); 
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log("Server running on port:" + port));

