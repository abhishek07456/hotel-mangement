const mongoose =require('mongoose');
const requestu =mongoose.model('login');

const loginfaculty =function(req,res){

    requestu.create({
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    
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
  loginfaculty 
};


 
