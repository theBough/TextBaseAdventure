var msg = document.getElementById("output");
var isSlap = false;

function gameStart() {
  var input = document.getElementById("myText").value;

  if (isSlap) {
    slapOn();
  } else {
    switch (input) {
      case "h":
        msg.innerHTML += ">>>>" + input + "</br>" + help;
        break;
      case "s":
        msg.innerHTML += ">>>>" + input + "</br>Who would you like to slap?";
        isSlap = true;
        break;
      default:
        msg.innerHTML += ">>>>" + input + "</br>Sorry I don't understand this command";
        break;
    }//end switch
  }//end if
}

var help = '***************************</br>\
| Here are the commands for the game:</br>\
| h - help</br>\
| i - inspect an item</br>\
| u - use an item</br>\
| m - to see the map</br>\
| c - to see what you ar carrying</br>\
| s - to slap someone.</br>\
  *************************** ';
  
