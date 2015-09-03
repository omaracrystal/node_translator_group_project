var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/play', function(req, res, next) {
  res.render('play');
})

module.exports = router;
