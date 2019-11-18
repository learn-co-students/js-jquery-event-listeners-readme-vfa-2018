//define functions here

$(document).ready(function(){
// call functions here

/*The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".*/
 
$('p').on;"keypress", function(getIt){
      return console.log("Hey!")
  };

/*The function should bind the load event that adds the class tasty to the image to add a red frame to the image.*/
function frameIt() {
  $('img').on('load', function(frameIt){
  img.tasty
});
}

/* The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.*/
function pressIt() {
  $(document).on('keypress', function(pressIt) {
  if (pressIt.which == 71){
    alert('\'G\' was pressed');
  }
});
}

/*The function should bind a submit event to the form that alerts "Your form is going to be submitted now."*/
function submitIt() {
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
    return;
});
}

});
