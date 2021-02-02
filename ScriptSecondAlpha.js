var msg = document.getElementById("output");

function gameStart(){
  var input = document.getElementById("myText").value;
  if (input == 'h'){
    msg.innerHTML += ">>>>" + input + "</br>" + help;
  }
  
}

help = '***************************</br>\
| Here are the commands for the game:</br>\
| h - help</br>\
| i - inspect an item</br>\
| u - use an item</br>\
| m - to see the map</br>\
| c - to see what you ar carrying</br>\
***************************';
