const mongoose =require('mongoose');
const requestu =mongoose.model('visitordetail');

const visitor =function(req,res){
    

        
    requestu.create({

        noofvisitors: req.body.noofvisitors,
        companyName: req.body.companyName,
        visitorname: req.body.visitorname,
        email:  req.body.email,
           contact:req.body.contact,
          arrivaldate: req.body.arrivaldate,
          arrivaltime: req.body.arrivaltime,
          
           

          departuredate: req.body.departuredate,
          departuretime: req.body.departuretime,
          pickupreq:  req.body.pickupreq ,
          pickupinfo: req.body.pickupinfo,
          dropreq:  req.body.dropreq ,
          dropinfo: req.body.dropinfo,
          meals:  req.body.meals ,
          mealDetail: req.body.mealDetail,
          blockname: req.body.blockname,
          roomNo:  req.body.roomNo ,
          roomtype: req.body.roomtype,
          vehicleNo:req.body.vehicleNo,
          driverName:req.body.driverName,
          driverPhoneNo:req.body.driverName,
          

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

