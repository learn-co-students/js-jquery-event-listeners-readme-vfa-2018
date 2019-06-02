//define functions here

$(document).ready(function(){

// call functions here

});

$('p').on("click",function(getIt){"Hey!"});

$('img').on('load', function(frameIt){
  border: red;
});

$(document).on('keydown', function(pressIt) {
  if(key.which == G){
      alert('s was pressed');
  }
});

$("form").on("submit", function(submitIt) {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
});


