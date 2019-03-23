



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitordetails = new Schema({
   noofvisitors:{
    type: String
     
   },
   companyName:{
    type: String

   },
  
 visitorname:{
type: String

},
   email:{
    type: String

    },

contact:{
    type: String,
    },

arrivaldate:{
    type: String,
    
},
arrivaltime:{
    type: String,
   
},



departuredate:{
    type: String,
     
},
departuretime:{
    type: String,
    
},
 pickupreq:{
        type: String,

    },
    pickupinfo:{
        type: String,

    },
 dropreq:{
        type: String,

    },
    dropinfo:{
        type: String,

    },
 meals:{
        type: String,

    },
    mealDetail:{
        type: String,

    },
  blockname:{
        type: String,

    },
  roomNo:{
        type: String,

    },
 roomtype:{
        type: String,

    },
 vehicleNo:{ 
        type: String, 

       },
 driverName:{ 
        type: String, 

       },
 driverPhoneNo:{ 
        type: String, 

       },
  status :
   {
       type:String,
       default:'pending'
   },
   delete :
   {
       type:Boolean,
       default:false,
   }

})

module.exports = mongoose.model('visitordetail',visitordetails);
