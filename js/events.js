//define functions here

function getIt() {
  // bind a click event to p tag, when clicked it alerts "Hey!"
  $('p').on("click", function() {
    alert ("Hey!");
  })
}

function frameIt() {
  //bind the load event that adds the class tasty to the image
  $('img').on("load", function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  //bind a keydown event to the input field of the form that alers a user when they have pressed the G key
  $('#typing').on("keydown", function(key) {
    if (key.which == 71) {
      alert("The G key was pressed.");
    }
  })
}

function submitIt() {
  //bind a submit event to the form that alerts message
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
