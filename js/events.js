//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});

function getIt() {
  $('p').on("click", function() {
    alert('u clicked a paragraph');
    return;
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71) {
      alert('you have pressed the G key')
    }
    return;
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert('your form is going to be submitted now')
    return;
  })
}
