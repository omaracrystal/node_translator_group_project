var express = require('express');
var randomWords = require('random-words');
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

// get all users
router.get('/users', function(req, res) {
  User.find(function(err, users){
    console.log(users);
    res.json(users);
  });
});

// get SINGLE user
router.get('/user/:id', function(req, res) {
  var query = {"_id": req.params.id};
  User.findOne(query, function(err, user){
    // console.log(user);
    res.json(user);
  });
});

router.post('/submit', function(req, res, next){
  if (req.body.name === "") {
    res.send("Please enter a name");
  } else {
  new User({name: req.body.name})
    .save(function(err, user) {
      res.json({message : 'success'});
    });
  }
});

router.get('/practice/:id', function(req, res, next) {
  var query = {"_id": req.params.id};
  User.findOne(query, function(err, user){
    // console.log(user);
    res.render('practice', {user:user, title: 'Language Translator'});
  });
});


// router.get('/play', function(req, res, next) {
//   var randomWord = randomWords();
//   res.render('play' )
//   res.render('play', {
//   randomWord : randomWord,
// }

router.get('/play/:id', function(req, res, next) {
  console.log(req.params.id);
  var randomWord = randomWords();
  console.log(randomWord);
  res.render('play', {
    randomWord : randomWord,
    // languageTo : languageTo,
    // languageFrom : languageFrom,
    // startLang : startLang,
    // endLang : endLang
  });
});

// get SINGLE user
router.get('/users/:id', function(req, res) {
  var query = {"_id": req.params.id};
  User.findOne(query, function(err, user){
    // console.log(user);
    res.render('profile', {user:user});
  });
});

// update SINGLE user
router.put('/user/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = req.body;
  var options = {new: true};
  User.findOneAndUpdate(query, update, options, function(err, user){
    // console.log(user);
    res.json(user);
  });
});

// delete SINGLE user
router.delete('/user/:id', function(req, res) {
  var query = {"_id": req.params.id};
  User.findOneAndRemove(query, function(err, user){
    // console.log(user);
    res.json(user);
  });
});

router.get('/users/:id', function(req, res, next) {
  res.render('profile', { title: 'Language Translator' });
});





module.exports = router;
