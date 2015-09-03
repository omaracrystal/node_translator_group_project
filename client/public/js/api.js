$(".btn-success").on("click", function(e) {
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
