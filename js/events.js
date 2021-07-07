//define functions here
function getIt(){
 $('p').on('click', function(){
    alert("Hey!");
    return;
 });
 return;
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
    return;
  });
  return;
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which === 71){
      alert('G was pressed');
    }
    return;
  });
  return;
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
