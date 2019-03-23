const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const newfaculty = mongoose.Schema({ 

  newfacultyname:{
      type: String,
  },
  newfacultydepartement:{
      type: String,
    },
    newfacultyemail:{ 
      type: String,
    },
    newfacultyphoneno:{
      type: String,
   },
   password:
   {
     type:String,
   }
  

  
})

module.exports = mongoose.model('newfacultys',newfaculty);