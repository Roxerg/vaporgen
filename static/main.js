var seconds = new Date().getTime() / 1000;
var x = "_";

var myVar = setInterval(myTimer, 1);

var first = true;
var isNone = false;

var screenContent = [
  "Filesystem Used Available Use%<br>",
  "/dev/md0 207380 5263352 4%<br>",
  "/dev/md1 13722288 61093296 19%<br>",
  "/dev/md4 4309572 17589056 20%",
  "<br>user<b>@</b>ej☹8d❤:"
];

var inputLine = "";

document.getElementById("txt").innerHTML = "";
    screenContent.forEach(function(element) {
      var prevz = document.getElementById("txt").innerHTML;
      document.getElementById("txt").innerHTML = prevz + element;
    });

document.getElementByClassName("img").addEventListener('touchstart', pull_up_keyboard, false);
document.getElementByClassName("img").addEventListener('click', pull_up_keyboard, false);

function pull_up_keyboard() {
  prompt();
  console.log("tap");
}

document.onkeydown = function(evt) {
    evt = evt || window.event;



    if (evt.keyCode == 8) {
      inputLine = document.getElementById("input").innerHTML;
      document.getElementById("input").innerHTML = inputLine.substring(0, inputLine.length - 1);
    }
    else if (evt.keyCode >= 41 && evt.keyCode < 91) {
      inputLine = document.getElementById("input").innerHTML;
      if (inputLine.length >= 24) {
        document.getElementById("input").innerHTML = inputLine.substring(0, inputLine.length - 1) + String.fromCharCode(evt.keyCode).toLowerCase();
      }
      else {
        document.getElementById("input").innerHTML = inputLine + String.fromCharCode(evt.keyCode).toLowerCase();
      }
      
    }
    else if (evt.keyCode == 32 || evt.keyCode == 190){
      var inputLine = document.getElementById("input").innerHTML;
      
      if (evt.keyCode == 190) {
        if (inputLine.length >= 24) {
          document.getElementById("input").innerHTML = inputLine.substring(0, inputLine.length - 1) + '.';
        }
        else {
          document.getElementById("input").innerHTML = inputLine + '.';
        }
      }
      else {
        if (inputLine.length >= 24) {
          document.getElementById("input").innerHTML = inputLine.substring(0, inputLine.length - 1) + ' ';
        }
        else {
          document.getElementById("input").innerHTML = inputLine + ' ';
        }
      }
    }
    else if(evt.keyCode == 13) { //ENTER {
      var temp = document.getElementById("txt").innerHTML;
      console.log(temp);

      inputLine = document.getElementById("input").innerHTML;

      // PSEUDO COMMANDS

      if(inputLine == "clear") {
        screenContent = [ "<br>user<b>@</b>ej☹8d❤:" ];
        document.getElementById("input").innerHTML = "";
      }
      else if(inputLine.length == 0) {
        screenContent.push("<br>user<b>@</b>ej☹8d❤:");
        document.getElementById("input").innerHTML = "";
      }
      else if(inputLine == "ls") {
        screenContent[screenContent.length - 1] += inputLine;
        screenContent.push("<br><span class=\"filename\">vaporwaverize</span>");
        screenContent.push("<br><span class=\"filename\">readme.txt</span>");
        screenContent.push("<br><span class=\"filename\">site.html</span>");
        screenContent.push("<br>user<b>@</b>ej☹8d❤:");
        document.getElementById("input").innerHTML = "";
      }
      else {
        screenContent[screenContent.length - 1] += inputLine;
        screenContent.push("<br>ERROR: UNRECOGNIZED COMMAND");
        screenContent.push("<br>user<b>@</b>ej☹8d❤:");
        document.getElementById("input").innerHTML = "";
      }
    }

    while (screenContent.length >= 18) {
      screenContent.shift();
    }

    // takes care of empty line at the top
    if (screenContent[0].substring(0, 4) == "<br>") {
      screenContent[0] = screenContent[0].substring(4);
    }

    document.getElementById("txt").innerHTML = "";
    screenContent.forEach(function(element) {
      var prevz = document.getElementById("txt").innerHTML;
      document.getElementById("txt").innerHTML = prevz + element;
    });
      // TODO: 17 LINES MAX
};


function myTimer() {

  if(isNone) {
    isNone = false;
    document.getElementById('glitch').style.display = "block";
  }
  else {
    isNone = true;
    document.getElementById('glitch').style.display = "none";
  }

  if (((new Date().getTime() / 1000) - seconds) > 1) {
    seconds = new Date().getTime() / 1000;
    if (x == '_') {
    document.getElementById("marker").innerHTML=x;
    x = ' ';
    }
    else {
    document.getElementById("marker").innerHTML=x;
    x = '_';
    }
  }

}

var canvas = document.getElementById("myCanvas");
//var width = document.getElementById("terminal").width;
//console.log(width);
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#42f4f4";
ctx.strokeStyle = "#42f4f4";
ctx.moveTo(0, 20)
ctx.lineTo(7000, 20);
ctx.stroke();
