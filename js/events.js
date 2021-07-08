//define functions here
function getIt() {
  $('p').click(function() {
    alert("Hey!");
  }
)}

//frameIt function

function frameIt() {
  
  $('img').addClass('tasty')
    
}

//pressIt function

function pressIt() {
  
  $('#typing').keydown(function(key) {
    
    if(key.which == 71) {
      alert("g was pressed");
    }
  })
}

//submitIt function
function submitIt() {
  
  $("form").on("submit", function() {
    
    alert("Your form is going to be submitted now.")
    
  })
  
}

$(document).ready(function(){
  
  getIt();
  frameIt();
  pressIt();
  submitIt();
})