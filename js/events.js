//define functions here
function getIt() {
  $("p").bind("click", function(){
    alert("Hey!");
});
}

//function frameIt() {
  //$(.tasty).load
//}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
});
}
$(document).ready(function(){

// call functions here

});
