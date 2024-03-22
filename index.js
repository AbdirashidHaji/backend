const express = require('express');

const app = express();
require ('dotenv').config();
require ('./Model/dbConnect');

const studentRoutes = require('./Routes/studentRoute');

app.use (express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentRoutes);
app.listen(process.env.port || 4000, function() {
    console.log('Now Listening for requests on: http://localhost:4000/');
  });

  