$('#guessInput').on($('#submitGuess'), function(e){
  e.preventDefault();
  // form inputs
  var $guessInput = $('#guessInput').val();
  // creating payload
  var payload = {
    word: $('#word').innerHTML
    guess: $guessInput

  };

  $.post('/play', payload, function(data) {
    $( "#myModalLabel" ).html(data.message);
    $( "#all" ).html("");
    $(':input', 'form').val('');
    listHeros();
  });
});
