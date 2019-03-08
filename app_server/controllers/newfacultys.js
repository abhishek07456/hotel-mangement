const mongoose =require('mongoose');
const requestu =mongoose.model('requestdetail');
const newfaculty =function(req,res){

    requestu.create({
    requesterdate: req.body.requesterdate,
    department: req.body.department,
    requestername:  req.body.requestername,
    title:  req.body.title,
  
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('login.ejs');
        }
        
    });
};
module.exports={
   request 
};


 
