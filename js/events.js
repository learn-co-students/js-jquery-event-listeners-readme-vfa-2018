//define functions here

function getIt() {
  alert ("Hey!");
}

function frameIt() {
  $("img").addClass('tasty');
}

function pressIt() {
  $(document).on('keydown', function(key){
    if(key.which == 71) {
      alert('G was pressed');
    }
  })
}

function submitIt() {
  alert ('Your form is going to be submitted now.');
}


$(document).ready(function(){

// call functions here
$('p').click(getIt())

$('img').load(frameIt())


});

