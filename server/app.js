const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: 'config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// linking the router file to make routing easy.
app.use(require('./router/auth'));

app.use(require('./router/api'))

const PORT = process.env.PORT;

// Middleware

const middleware =(req, res, next)=>{
    console.log(`Hello Middleware`);
    next();
}

// middleware();

// app.get('/', (req, res)=>{
//     res.send(`Hello world from my first server`);
// });

app.get('/about', middleware, (req, res)=>{
    console.log('HEllo my about')
    res.send(`Hello Hashim from my first server`);
});

app.get('/signin', (req, res)=>{
    res.send(`Hello Signin from my first server`);
});

app.get('/signup', (req, res)=>{
    res.send(`Hello Signup from my first server`);
});

app.delete("/api/_id", (req, res, next)=>{  
    console.log(req.params._id);  
    res.status(200).json({  
        message:"Post deleted!"  
      });  
  });  



app.listen(4000, ()=>{
    console.log(`Server is running on Port no ${PORT}`);
});