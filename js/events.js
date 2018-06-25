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

$(document).ready(function(){

// call functions here
getIt();

});
