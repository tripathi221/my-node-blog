require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const blogRoutes = require('./routes/blog.route.js');
const cors = require('cors');

const app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api', blogRoutes);

app.listen(port, () => {
    console.log('server is running at port:', port);
});