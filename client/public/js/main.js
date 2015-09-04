$(document).on('ready', function() {
  $('#edit-form').hide();
  listUsers();
});
// create user and show list of users
$('form').on('submit', function(e) {
  e.preventDefault();
  // form inputs
  var $userName = $('#user-name').val();
  var payload = {
    name: $userName,
  };
  console.log($userName);
  $.post('/submit', payload, function(data) {
    console.log(data.message);
    $("#results").html(data.message);
    $("#all").html("");
    $(':input', 'form').val('');
    listUsers();
  });
});
// show edit user page
$(document).on('click', '.edit-button', function() {
  $.get('/user/' + $(this).attr('id'), function(data) {
    $('#edit-name').val(data.name);
    $('.update-button').attr('id', data._id);
  });
  $('#edit-form').show();
  $('#user-table').hide();
});

// update a single user
$(document).on('click', '.update-button', function(e) {
  e.preventDefault();
  // form inputs
  var $updatedUserName = $('#edit-name').val();
  // creating payload
  var payload = {
    name: $updatedUserName,

  };
  console.log(payload);
  $.ajax({
    method: "PUT",
    url: '/user/' + $(this).attr('id'),
    data: payload
  }).done(function(data) {
    $("#all").html("");
    listUsers();
    $('#edit-form').hide();
    $('#user-table').show();
  });
});

$(document).on('click', '.delete-button', function(){

  $.ajax({
    method: "DELETE",
    url: '/user/'+$(this).attr('id')
  }).done(function(data) {
    $("#all").html("");
    $( "#results" ).html('Success!');
    listUsers();
  });

});

$(document).on('click', '#cancel-edit', function(e) {
  e.preventDefault();
  $('#edit-form').hide();
  $('#user-table').show();
});

//helper function
function listUsers() {
  $.get('/users', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>' +
        '<td><a href="users/' + data[i]._id + '">' + data[i].name + '</a></td>' +
        '<td><a class="btn btn-danger btn-xs delete-button" id="' + data[i]._id + '" role="button">Delete</a>' +
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="' + data[i]._id + '" role="button">Edit</a></td>' +
        '</tr>'
      );
    }
  });
}
