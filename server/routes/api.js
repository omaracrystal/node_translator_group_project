var keys=require('../routes/key');
var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
  client_id:keys.client_id,
  client_secret:keys.client_secret
});


// bt.translate('hello.', 'en', 'es', function(err, response) {
//      res.json(response);
//    });
