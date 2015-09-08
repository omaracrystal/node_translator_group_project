var express = require('express');
var router = express.Router();
var keys=require('../routes/key');
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
  client_id:keys.client_id,
  client_secret:keys.client_secret
});

router.post("/practice", function(req, res, next) {
  var languageFrom = req.body.languageFrom;
  var languageTo = req.body.languageTo;
  var word = req.body.word;
  bt.translate(word, languageFrom, languageTo, function(err, response) {
    res.json(response.translated_text);
  });
});

router.post("/play", function(req, res, next) {
  var languageFrom = req.body.languageFrom;
  var languageTo = req.body.languageTo;
  var randomWord = req.body.randomWord;
  bt.translate(word, languageFrom, languageTo, function(err, response) {
    res.json(response.translated_text);
  });
});

<<<<<<< HEAD

=======
>>>>>>> b3d9ce5c80c48d253812ad36d29811791b38ce11
module.exports = router;
