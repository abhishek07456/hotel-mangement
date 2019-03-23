const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const requestdetails = mongoose.Schema({ 

  requesterdate:{
      type:String,
      required:true,
  
  },
    department:{
      type: String,
      required:true,
    },
    requestername:{ 
      type: String,
      required:true,
    },
    requesteremail:{
        type:String,
        required:true,
     },
  
   title:{
    type: String,
    required:true,
 },
 contact:{
    type: String,
    required:true,
 },
   altcontact:{
      type: String,
      required:true,
   },
   
   noofvisitors:{
    type: String,
    required:true,
},
 
companyName:{
    type: String,
    required:true,
},


Requester:[
    {
        visitorname:{
    type: String,
    required:true,
},

contact:{
    type: String,
    required:true,
},

email:{
    type: String,
    required:true,
}
}],

arrivaldate:{
    type: String,
    required:true,
},
arrivaltime:{
    type: String,
    required:true,
},



departuredate:{
    type: String,
    required:true,
},
departuretime:{
    type: String,
    required:true,
},
pickupreq:{
    type: String,
    required:true,
},
pickupinfo:{
    type: String,

},
dropreq:{
    type: String,
    required:true,
},
dropinfo:{
    type: String,
  
},
meals: {
  type: String,
  required:true,
},

  
})

module.exports = mongoose.model('requestdetail',requestdetails );