//Connecting DB 

const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, (err) => {

    if(err) {
      console.log('Database error: ' + err);
    } else {
      console.log('Successfull database connection');
 
   }
 
 });