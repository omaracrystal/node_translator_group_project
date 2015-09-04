$(document).on('ready', function(){
  // $('#edit-form').hide();
  listUsers();
});

$('form').on('submit', function(e){
  e.preventDefault();
  // form inputs
  var $userName = $('#user-name').val();
  var payload = {
    name: $userName,
  };
  console.log($userName);

  $.post('/submit', payload, function(data) {
    console.log(data.message);
    $( "#results" ).html(data.message);
    $( "#all" ).html("");
    $(':input', 'form').val('');
    listUsers();
  });


});


$(document).on('click', '#cancel-edit', function(e) {
  e.preventDefault();
  $('#edit-form').hide();
  $('#user-table').show();
});

//helper function
function listUsers(){
  $.get('/users', function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>'+
          '<td><a href="practice/'+data[i]._id+'">'+data[i].name+'</a></td>'+
          '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id+'" role="button">Delete</a>'+
          '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="'+data[i]._id+'" role="button">Edit</a></td>'+
          '</tr>'
      );
    }
  });
}
