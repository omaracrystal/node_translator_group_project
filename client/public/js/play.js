// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

 /*/                \ \
| | Global Variables | |
 \ \                /*/

//counters
words = 0;
wordsFail = 0;
wordsPass = 0;

rounds = 0;
roundsFail = 0;
roundsPass = 0;

//////store start language and end language//////

//grab value of start and end language selected from modal
var startLang = $('select:eq(0)').val();
var endLang = $('select:eq(1)').val();

//grab value of random word
var randomWord= $('#word').text();

//store guess and answer once submit is clicked
var answer = {}
var guess = {};



 /*/                \ \
| |  Click  Events   | |
 \ \                /*/

//modal 1 area
$('#startGame').on('click', function {
  e.preventDefault();
//based on stored values for startLang and endLang the {{ random word }} section will be generated based off start lang.

//*****//close out modal
});

$('#guessInput').on('submit' fuction {
  e.preventDefault();
  words =+ 1

  //grab value of random word
  var randomWord= $('#word').text();
  //plug in random word into translator and send back answer

//*****// need help to store translated answer from the random word generated
?  answer.push(_____________);

  //grab value of guess Input area
  var guessInput = $('#guessInput').val;
  //push value of guessInput into global variable guess
  guess.push(guessInput);

  //check to see if guess and answer are the same
  checkAnswer(guess, answer);

  //launch modal pop up
 ?

  //append values to modal pop up
  checkAnswerAppender(guess, answer);

});

//pop up modal once 'submit guess' is clicked
$(#nextWord).on('click', function () {
  //generate another random word based on startLang
})


 /*/                \ \
| |    Utilities    | |
 \ \                /*/

function checkAnswer (guess, answer) {
  if (guess === answer) {
    //append onto pop-up modal
    $('#passOrFail').text("Correct! " + "Answer= " + answer + " Your guess= " + guess).trim();
    return wordsPass =+ 1;
  } else {
    //append onto pop-up modal
     $('#passOrFail').text("Sorry that's wrong. " + "Answer= " + answer + " Your guess= " + guess).trim();
    return wordsFail =- 1;
  }
}

function wordCounterAppender (words, wordsPass, wordsFail) {

}

function roundCounter (words, wordsFail, wordsPass) {
  //for every 10 words
  rounds =+ 1;

  //if 7 out of 10 words are pass
  roundsPass =+ 1;
    //else
    roundsFail =- 1;

}

function roundCounterAppender (rounds, roundsPass, roundsFail) {

}


//progreess tracker is the average of passed words and rounds
function progressTracker (words, wordsPass, rounds, roundsPass) {
  var wordsAvg = wordsPass/words;
  var roundsAvg = roundsPass/rounds;
  //avg of both
  var progress = (wordsAvg + roundsAvg)/2;
  return progress;
}

function progressTrackerAppender (progress) {
  //append value to progressBar section
?  $('#progress').text().append("progress" + progress + "%");
  //based on progress value fill in progressBar
?  $('#progressBar');
}
