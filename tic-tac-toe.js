
//board to create for winning algorithm
var row1 = $('.square').slice(0, 3);
var row2 = $('.square').slice(3, 6);
var row3 = $('.square').slice(6, 9);
var board = [row1, row2, row3];

var checkWinner = function(arrays) {
  //create function to check winner
};



$(document).ready(function() {
  var count = 1;
  $('.square').click(function() {
    if(count < 9) {
    if (count % 2 === 1) {
      $(this).text('X');
      count++;
    } else {
      $(this).text('O');
      count++;
    }
  }
  });
  $('button').click(function() {
    count = 1;
    $('.square').empty();
  });
});