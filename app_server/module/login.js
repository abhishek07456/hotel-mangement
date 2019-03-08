const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const logins = mongoose.Schema({ 

    email:{
      type: String,
  },
  contactNumber:{
      type: String,
    },
   
  
})

module.exports = mongoose.model('login',logins);