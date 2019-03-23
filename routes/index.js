var express = require('express');
var router = express.Router();
var mongodb     = require('mongodb');
const nodemailer=require('nodemailer');
var otpGenerator = require('otp-generator')
var passport = require('passport');

var MongoClient = mongodb.MongoClient;
dburl='mongodb://bringo:Bringofs8@ds227243.mlab.com:27243/bringo';
var requ=require('../app_server/controllers/requestdetails');
var vis=require('../app_server/controllers/visitordetails');
var login=require('../app_server/controllers/logins')
var faculty=require('../app_server/controllers/newfacultys');
var cntrl=require('./controllers/main');

router.post('/bringo/request',requ.request);
router.get('/bringo/request',cntrl.request);
router.get('/bringo/addWorker',cntrl.addWorker);
 
 
router.get('/bringo/login',cntrl.login);
 

router.get('/bringo/guestRecords',cntrl.guestRecords);
router.post('/bringo/faculty/add',faculty.request);

router.get('/bringo/transportdetailsadmin',cntrl.transportAdmin);
 
router.post('/bringo/send',vis.visitor);
router.get( '/bringo/transportinbox', function(req, res,next) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    var query = { $or: [ { pickupreq: "Yes" }, { dropreq: "Yes" } ] };
    //var query = {$and : [{delete :true} ,{$or : [ { pickupreq: "Yes" }, { dropreq: "Yes" } ]} ]};
    db.collection('visitordetails').find(query).toArray(function(err, docs){
      if(err) throw err;
       
      res.render('transportinbox.ejs', {data: docs});
      db.close();
    });
  });
 
});
 var id;
router.get( '/bringo/transport_details', function(req, res,next) {
  id=new mongodb.ObjectID(req.query.id)
   

  res.render('transport_details.ejs');
  next();
});

 
router.post( '/bringo/transport_details', function(req, res,next) {
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }

    db.collection('visitordetails').update(
      {_id:id},
      {
        $set:{
          vehicleNo:req.body.vehicleNo,
          driverName:req.body.driverName,
          driverPhoneNo:req.body.driverPhoneNo,
          status:"Done",
          delete:req.body.delete
             }
      });
    res.redirect('/bringo/transportinbox');
  });
 });
router.get('/bringo/faculty/delete', function(req, res, next) {
 
  var id = req.query.id;
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }

    db.collection('newfacultys', function(err, products) {
      products.deleteOne({_id: new mongodb.ObjectID(id)});
      if (err){
         throw err;
       }else{
          db.close();
     res.redirect('/bringo/faculty');
       }
    });
  });
  
});
router.get('/bringo/request/delete', function(req, res, next) {
 
  var id = req.query.id;
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }

    db.collection('requestdetails', function(err, products) {
      products.deleteOne({_id: new mongodb.ObjectID(id)});
      if (err){
         throw err;
       }else{
          db.close();
     res.redirect('/bringo/inbox');
       }
    });
  });
  
});
router.get('/bringo/record/delete', function(req, res, next) {
 
  var id = req.query.id;
  MongoClient.connect(dburl, function(err, db) {
    if(err) { throw err;  }

    db.collection('visitordetails', function(err, products) {
      products.deleteOne({_id: new mongodb.ObjectID(id)});
      if (err){
         throw err;
       }else{
          db.close();
     res.redirect('/bringo/details');
       }
    });
  });

});
router.get('/bringo/faculty', function(req, res,next) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('newfacultys').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('adduser.ejs', {data: docs});
      db.close();
    });
  });
 
});

router.get('/bringo/arrangement', function(req, res,next) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('visitordetails').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('admin.ejs', {data: docs});
      db.close();
    });
  });

});
router.get('/bringo/record', function(req, res,next) {
  var id1= req.query.id;
 
 
  
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    
    db.collection('visitordetails').find({_id: new mongodb.ObjectID(id1)}).toArray(function(err, docs){
      if(err) throw err;
      res.render('records.ejs', {data: docs});
      db.close();
    });
  });
  
});
//render requestor data
router.get('/bringo/inbox', function(req, res,next) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('requestdetails').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('inbox.ejs', {data: docs});
      db.close();
    });
  });

});
//

router.get('/bringo/visitorAdmin', function(req, res,next) {
  var k= req.param('email');
  var d= req.param('date');
  console.log(k);
  console.log(d); 
  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    var query = { $and : [{requesteremail:k},{requesterdate:d}]};
    db.collection('requestdetails').find(query).toArray(function(err, docs){
      if(err) throw err;
      res.render('visitordetailsadmin.ejs', {data: docs});
      db.close();
    });
  });
  
});
 

//-----
router.post('/bringo/send', (req, res, next) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.firstname}</li>
      <li>Company: ${req.body.organization}</li>
      <li>Email: ${req.body.contact}</li>
      <li>Phone: ${req.body.altcontact}</li>
    </ul>
    <h3>Message</h3>
    
    <p>${req.body.contact}</p>
  `;
  const output1 =`
      <p>Your filled details</p>
      <ul><li>Phone: ${req.body.firstname}</li>
      </ul>
      <h3>Message</h3>
      
      <p>${req.body.lastname}</p>
  `
  
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: 'mail.google.com',
    port: 587,
    secure: false, // true for 465, false for other ports
 
    service: 'gmail',
    auth: {
        user: 'abhishek07456@gmail.com', // generated ethereal user
        pass: '#6962@Abhishek'  // generated ethereal password
       },

    tls:{
      rejectUnauthorized:false
    }
   });



  // setup email data with unicode symbols
  
  let mailOptions = {
      from: '"abhishek" <abhishek07456@gmail.com>', // sender address
      to: 'abhishek07456@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body

  };
  let mailOptions1 = {
      from: '"abhishek" <abhishek07456@gmail.com>', // sender address
      to: 'abhishek1610991031@gmail.com ', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output1 // html body

  };
  // send mail with defined transport object
  //if(`${req.body.t}`=="1")
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.render('login');
  });
  //if(`${req.body.f}`=="2")
  transporter.sendMail(mailOptions1, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.render('login');
  });

  });
  

 
 

 /*
router.post( '/bringo/Auth', function(req, res,next) {
  var email=req.body.email;
  var usertype=req.body.usertype;
  var password=req.body.password;
     if(usertype="faculty")
     {

     }
});
*/

module.exports = router;
