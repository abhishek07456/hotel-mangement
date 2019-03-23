const mongoose =require('mongoose');
const requestu =mongoose.model('newfacultys');
const request =function(req,res){

    requestu.create({
        newfacultyname: req.body.newfacultyname,  
        newfacultydepartement: req.body.newfacultydepartement, 
         newfacultyemail: req.body.newfacultyemail, 
          newfacultyphoneno: req.body.newfacultyphoneno,
          password:req.body.password
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .redirect('/bringo/faculty');
        }
        
    });
};
module.exports={
   request 
};


 
