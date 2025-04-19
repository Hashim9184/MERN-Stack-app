const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require("../model/userSchema");


router.get('/', (req, res)=>{
    res.send(`Hello world from the server router js`);
});

// Using Async and Await

router.post('/register', async (req, res) =>{

    let token;

    const {fname, lname, username, email, phone, password, cpassword} =req.body;

    if(!fname || !lname || !username || !email || !phone || !password || !cpassword){
        return res.status(422).json({error: `Fill all the field in the form properly!!`});
    }

        try{
// Finding user has already registered with same Email or Username

 const emailExist = await User.findOne({email:email});
 const userExist = await User.findOne({username:username});

 if(emailExist){
    return res.status(422).json({error: "Email already exists"});
 }
 if(userExist){
    return res.status(422).json({error: "Username already exists"});
 }
 const user = new User({fname, lname, username, email, phone, password, cpassword});

 await user.save();

 res.status(201).json({message: `User registered succusfull`});

        }catch(err){
            console.log(err);
        }

});

module.exports = router;