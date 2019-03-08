const mongoose =require('mongoose');
const requestu =mongoose.model('visitordetail');
const visitor =function(req,res){
    requestu.create({
        gender: req.body.gender,
    firstname:  req.body.firstname,
    lastname:   req.body.lastname,
    organisation:req.body.organisation,
    contact:    req.body.contact,
    altcontact: req.body.altcontact,
    email:      req.body.email,
    arrivaldate: req.body.arrivaldate,
    arrivaltime: req.body.arrivaltime,
    noofvisitors: req.body.noofvisitors,
    purpose: req.body.purpose,
    pickupreq: req.body.pickupreq,
    pickupinfo:  req.body.pickupinfo,
    pickuplocation: req.body.pickuplocation,
    pickuptransportcoordinator: req.body.pickuptransportcoordinator,
    pickuptransportcoordinatorphoneno: req.body.pickuptransportcoordinatorphoneno,
    pickupperson: req.body.pickupperson,
    pickuppersonphoneno: req.body.pickuppersonphoneno,
    pickupvehicletype: req.body.pickupvehicletype,
    pickupvehiclecapacity: req.body.pickupvehiclecapacity,
    dropvehiclenumber: req.body.pickupvehiclenumber,
    departuredate: req.body.departuredate,
    depaerturetime: req.body.departuretime,
    dropreq: req.body.dropreq,
    dropinfo:  req.body.dropinfo,
  
    droptransportcoordinator: req.body.droptransportcoordinator,
    droptransportcoordinatorphoneno: req.body.droptransportcoordinatorphoneno,
    droppperson: req.body.dropupperson,
    droppersonphoneno: req.body.droppersonphoneno,
    dropvehicletype: req.body.dropvehicletype,
    dropvehiclecapacity: req.body.dropvehiclecapacity,
    dropvehiclenumber: req.body.dropvehiclenumber,
    mealsdate:req.body.mealsdate,
    morningtea: req.body.morningtea,
    morningteaandsnacks: req.body.morningteaandsnacks,
    morninglocation: req.body.morninglocation,
    morningpersonresponsible: req.body.morningpersonresponsible,
    morningacompaniedpersonname: req.body.morningacompaniedpersonname,
    morningacompaniedpersondepartment: req.body.morningacompaniedpersondepartment,
    morningacompaniedpersoncontact: req.body.morningacompaniedpersoncontact,
    breakfast: req.body.breakfast,
    breakfastloaction: req.body.breakfastloaction,
    breakfastpersonresponsible: req.body.breakfastpersonresponsible,
    breakfastacompaniedpersonname: req.body.breakfastacompaniedpersonname,
    breakfastacompaniedpersondepartment: req.body.breakfastacompaniedpersondepartment,
    breakfastacompaniedpersoncontact: req.body.breakfastacompaniedpersoncontact,
    lunchlocation: req.body.lunchlocation,
    lunchpersonresponsible: req.body.lunchpersonresponsible,
    lunchacompaniedpersonname: req.body.lunchacompaniedpersonname,
    lunchacompaniedpersondepartment: req.body.lunchacompaniedpersondepartment,
    lunchacompaniedpersoncontact: req.body.lunchacompaniedpersoncontact,
    eveningpersonresponsible: req.body.eveningpersonresponsible,
    eveningacompaniedpersonname: req.body.eveningacompaniedpersonname,
    eveningacompaniedpersondepartment: req.body.eveningacompaniedpersondepartment,
    eveningacompaniedpersoncontact: req.body.eveningacompaniedpersoncontact,
    dinner: req.body.dinner,
    hoteloroutside: req.body.hoteloroutside,
    roomtype: req.body.roomtype,
    roomno: req.body.roomno,
    buildingname: req.body.buildingname,
    checkindate: req.body.checkindate,
    checkintime: req.body.checkintime,
    checkoutdate: req.body.checkoutdate,
    checkouttime: req.body.checkouttime,
    executive: req.body.executive,
    executivecontact: req.body.executivecontact,
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
           .redirect('/bringo/inbox');
        }
        
    });
};
module.exports={
   visitor 
};

