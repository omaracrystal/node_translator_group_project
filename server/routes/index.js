var express = require('express');
var router = express.Router();
var keys=require('../routes/key');
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
     client_id:keys.client_id,
     client_secret:keys.client_secret
   });

router.get('/', function(req, res, next) {

bt.translate('hello.', 'en', 'es', function(err, response) {
     res.json(response);
   });

  res.render('index');


});

router.get('/play', function(req, res, next) {
  res.render('play');
})

module.exports = router;
