var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Language Translator' });
});

router.post('/submit', function(req, res, next){
  console.log(req.body.name);
  if (req.body.name === "") {
    res.send("Please enter a name");
  } else {
  res.redirect('/practice');
  }
});

router.get('/practice', function(req, res, next) {
  res.render('practice', { title: 'Language Translator' });
});

module.exports = router;
