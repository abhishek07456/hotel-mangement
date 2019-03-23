
const visitorAdmin=function(req,res){
  res.render('visitordetailsadmin.ejs', { title: 'Express' })

};
const request=function(req,res){
  res.render('request.ejs', { title: 'Express' })

};
const records=function(req,res){
  res.render('records.ejs', { title: 'Express' })

};
 
const login=function(req,res){
  res.render('login.ejs', { title: 'Express' })

};
const guestRecords=function(req,res){
  res.render('guestRecords.ejs', { title: 'Express' })

};
const faculty=function(req,res){
  res.render('adduser.ejs', { title: 'Express' })

};
const addWorker=function(req,res){
  res.render('addWorker.ejs', { title: 'Express' })

};
const transportAdmin=function(req,res){
  res.render('transportdetailsadmin.ejs', { title: 'Express' })

};
 
 


module.exports={
    request,
    visitorAdmin,
    login,
    
    records,
    guestRecords,
    faculty,
    addWorker,
    transportAdmin,
    
    
};
