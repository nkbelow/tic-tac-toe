$(document).ready(function() {
  var count = 1;
  $('.square').click(function() {
    if (count % 2 === 1) {
      $(this).text('X');
      count++;
    } else {
      $(this).text('O');
      count++;
    }
  });
  $('button').click(function() {
    $('.square').empty();
  });
});