//post request for practice page
$("#practice-question").on("click", function(e) {
  e.preventDefault();
  payload = {
    languageFrom: $("#languageSelect :selected").val(),
    languageTo: $("#languageTranslate :selected").val(),
    word: $("#wordInput").val().trim()
  };

  $.post('/api/practice', payload, function(data) {
    $("#result").empty();
    $("#result").append(data);
  });
});

//post request for challenge page
$("").on("click", function(e) {
  e.preventDefault();
  payload = {
    languageFrom: $("#languageSelect :selected").val(),
    languageTo: $("#languageTranslate :selected").val(),
    word: $("#wordInput").val().trim()
  };

  $.post('/api/play', payload, function(data) {
    $("#result");
  });
});
