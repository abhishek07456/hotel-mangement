const mongoose =require('mongoose');
const requestu =mongoose.model('requestdetail');

const request =function(req,res){

    const requesters =[];
    for(var i=0;i<req.body.noofvisitors;i++){
        requesters.push({
            visitorname:eval(  "req.body.visitorname"+i  ),
            
            contact:   eval(  "req.body.contact"+i  ),
            email:    eval(  "req.body.email"+i  ),
        })
    };
    

/*
        {
        firstname:  req.body.firstname0,
    lastname:   req.body.lastname0,
    contact:    req.body.contact0,
    email:      req.body.email0,
    },
    {
        firstname:  req.body.firstname2,
        lastname:   req.body.lastname2,
        contact:    req.body.contact2,
        email:      req.body.email2,
    },
    {
        firstname:  req.body.firstname3,
        lastname:   req.body.lastname3,
        organisation:req.body.organisation3,
        contact:    req.body.contact3,
        email:      req.body.email3,
    }];-->*/
    requestu.create({
    requesterdate: req.body.requesterdate,
    department: req.body.department,
    requestername:  req.body.requestername,
    requesteremail:  req.body.requesteremail,
    title:  req.body.title,
    contact:    req.body.contact,
   altcontact: req.body.altcontact,
    
    noofvisitors: req.body.noofvisitors,
  companyName:req.body.companyName,
    
    arrivaldate: req.body.arrivaldate,
    arrivaltime: req.body.arrivaltime,
    
    
    departuredate: req.body.departuredate,
    departuretime: req.body.departuretime,
    pickupreq: req.body.pickupreq,
    pickupinfo:  req.body.pickupinfo,
    dropreq: req.body.dropreq,
    dropinfo:  req.body.dropinfo,
    meals: req.body.meals,
    Requester:requesters,
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('request.ejs');
        }
        
    });
};
module.exports={
   request 
};


 
