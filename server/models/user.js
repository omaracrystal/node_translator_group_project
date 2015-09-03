var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
  name: String,
  challengesTaken: number,
  challengesPasses: number,
  challengesFailed: number,
  numWordsTranslated: number,
  numWordsTranslatedCorrectly: number,
  numWordsTranslatedIncorrectly: number
});

mongoose.model('users', User);
mongoose.connect('mongodb://localhost:3000/');
