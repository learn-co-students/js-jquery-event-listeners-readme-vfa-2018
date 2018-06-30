//define functions here

function getIt(){
    $('p').on('click', function(){
      alert("Hey!");
    });
  }
  
  function frameIt(){
    $('img.tasty').on('load', function(){
      $('img.tasty').css({"border-color": "red", 
             "border-weight":"2px", 
             "border-style":"solid"});
    });
  }
  function pressIt(){
    $('#typing').on('keydown', function(key){
      if(key.which === 71){
        alert("G key was pressed down.");
      }
    });
  }

$(document).ready(function(){

 

});
