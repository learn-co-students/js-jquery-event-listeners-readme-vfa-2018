function getIt() {
  $('p').on("click", function () {
    alert("Hey!");}
)}
function frameit() {
  $('img').on('load',function () {
    $('img').addClass('tasty');
  })
}
function pressIt(){
  $('typing').on('keydown', function(key) {
    if (key.which === 71) {
    alert("you have pressed g.");
    }
  })
}

function submitit() {
    $('form').on('submit', function() {
      alert("Your form is going to be submitted now.");
    })
}
$(document).ready(function() {
  getit();
  frameit();
  pressit();
  submitit();
});
