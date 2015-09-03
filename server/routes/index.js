var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('users');
var keys=require('../routes/key');
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
     client_id:keys.client_id,
     client_secret:keys.client_secret
   });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Language Translator' });
});


router.post('/submit', function(req, res, next){
  if (req.body.name === "") {
    res.send("Please enter a name");
  } else {
  new User({name: req.body.name})
    .save(function(err, user) {
      console.log(user);
      res.send('hi');
    });
  }
});

router.get('/practice', function(req, res, next) {
  res.render('practice', { title: 'Language Translator' });
});

router.get('/play', function(req, res, next) {
  res.render('play');
});

module.exports = router;
