//define functions here

$(document).ready(function(){

// call functions here
$('p').on("eventname", getIt())

$('img').on('load', frameIt())

});

function getIt() {
  return "Hey!"
}

function frameIt() {
  $('img').append(".tasty")
}