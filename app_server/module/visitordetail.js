



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitordetails = new Schema({
    gender:{
        type: String,
    },

    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    organisation:{
        type: String,
    },
    contact:{
        type: String,
    },
    altcontact:{
        type: String,
    },
    email:{
        type: String,
    },
    arrivaldate:{
        type: Date,
    },
    arrivaltime:{
        type: String,
    },
    noofvisitors:{
        type: String,
    },
  
    purpose:{
        type: String,
    },
    pickupreq:{
        type: String,
    },
    pickupinfo:{
        type: String,
    },
  
    pickuptransportcoordinator:{
        type: String,
    },
    pickuptransportcoordinatorphoneno:{
        type: String,
    },
    pickupperson:{
        type: String,
    },
    pickuppersonphoneno:{
        type: String,
    },
    pickupvehicletype:{
        type: String,
    },
    pickupvehiclecapacity:{
        type: String,
    },
    pickupvehiclenumber:{
        type: String,
    },
    departuredate:{
        type: String,
    },
    departuretime:{
        type: String,
    },
    dropreq:{
        type: String,
    },
    dropinfo:{
        type: String,
    },
    droplocation:{
        type: String,
    },
    droptransportcoordinator:{
        type: String,
    },
    droptransportcoordinatorphoneno:{
        type: String,
    },
    dropperson:{
        type: String,
    },
    droppersonphoneno:{
        type: String,
    },
    dropvehicletype:{
        type: String,
    },
    dropvehiclecapacity:{
        type: String,
    },
    pickupvehiclenumber:{
        type: String,
    },
    mealsdate:{
        type: String,
    },
    morningtea:{
        type: String,
    },
    morningteaandsnacks:{
        type: String,
    },
    morninglocation:{
        type: String,
    },
    morningpersonresponsible:{
        type: String,
    },
    morningacompaniedpersonname:{
        type: String,
    },
    morningacompaniedpersondepartment:{
        type: String,
    },
    morningacompaniedpersoncontact:{
        type: String,
    },
    breakfast:{
        type: String,
    },
    breakfastloaction:{
        type: String,
    },
    breakfastpersonresponsible:{
        type: String,
    },
    breakfastacompaniedpersonname:{
        type: String,
    },
    breakfastacompaniedpersondepartment:{
        type: String,
    },
    breakfastacompaniedpersoncontact:{
        type: String,
    },
    lunchlocation:{
        type: String,
    },
    lunchpersonresponsible:{
        type: String,
    },
    lunchacompaniedpersonname:{
        type: String,
    },
    lunchacompaniedpersondepartment:{
        type: String,
    },
    lunchacompaniedpersoncontact:{
        type: String,
    },
    eveningpersonresponsible:{
        type: String,
    },
    eveningacompaniedpersonname:{
        type: String,
    },
    eveningacompaniedpersondepartment:{
        type: String,
    },
    eveningacompaniedpersoncontact:{
        type: String,
    },
    dinner:{
        type: String,
    },
    hoteloroutside:{
        type: String,
    },
    roomtype:{
        type: String,
    },roomno:{

        type: String,
    },
    buildingname:{
        type: String,
    },
    checkindate:{
        type: String,
    },
    checkintime:{
        type: String,
    },
    checkoutdate:{
        type: String,
    },
    checkouttime:{
        type: String,
    },
    executive:{
        type: String,
    },
    executivecontact:{
        type: String,
    },
})

module.exports = mongoose.model('visitordetail',visitordetails);