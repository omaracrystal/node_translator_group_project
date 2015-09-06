var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
=======

>>>>>>> 5f9efa0623625cd66ad24d45988ff9f4e209ba6c

var User = new Schema ({
  name: String,
  languageTo: String,
  languageFrom: String,
  challengesTaken: Number,
  challengesPasses: Number,
  challengesFailed: Number,
  numWordsTranslated: Number,
  numWordsTranslatedCorrectly: Number,
  numWordsTranslatedIncorrectly: Number
});

module.exports = mongoose.model('users', User);
mongoose.connect('mongodb://localhost/translator-users');
