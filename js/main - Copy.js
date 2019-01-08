var seconds = new Date().getTime() / 1000;
var x = "_";

var myVar = setInterval(myTimer, 1);

var first = true;
var isNone = false;

document.onkeydown = function(evt) {
    evt = evt || window.event;



    if (evt.keyCode == 8) {
      var previous = document.getElementById("input").innerHTML;
      document.getElementById("input").innerHTML = previous.substring(0, previous.length - 1)
    }
    else if (evt.keyCode >= 41 && evt.keyCode < 91) {
      var previous = document.getElementById("input").innerHTML;
      document.getElementById("input").innerHTML= previous + String.fromCharCode(evt.keyCode).toLowerCase();
    }
    else if (evt.keyCode == 32 || evt.keyCode == 190){
      var previous = document.getElementById("input").innerHTML;
      if (evt.keyCode == 190) {
      document.getElementById("input").innerHTML= previous + '.';
      }
      else {
      document.getElementById("input").innerHTML= previous + ' ';
      }
    }
    else if(evt.keyCode == 13) { //ENTER {
      var temp = document.getElementById("txt").innerHTML;
      console.log(temp);
      var count = (temp.match(/__line__/g) || []).length;

      

      if (count >= 15) {
        //document.getElementById("txt").innerHTML = "";
        var pre = document.getElementById("txt").innerHTML;
        var z = pre.substring(pre.indexOf("__line__")+10);
        document.getElementById("txt").innerHTML = z;
        //console.log(z);
        //console.log(count);
        //count--;
      }
      //else if (count > 10 && first) {
      //  first = false;
      //  document.getElementById("txt").innerHTML = "user<b>@</b>ej☹8d❤:<wbr id=\"__line__\">";
      //}

      var previous = document.getElementById("input").innerHTML;
      var previoustxt = document.getElementById("txt").innerHTML;


      if (count < 16) {
        console.log(count);
        //document.getElementById("txt").innerHTML = previoustxt + "<br>";
        document.querySelector('#txt').appendChild(document.createElement('br'))
        var previoustxt = document.getElementById("txt").innerHTML;
      }

      if(previous == "clear") {
        document.getElementById("txt").innerHTML = "user<b>@</b>ej☹8d❤:<wbr id=\"__line__\">";
        document.getElementById("input").innerHTML = "";
      }
      else if(previous.length == 0) {
        document.getElementById("txt").innerHTML = previoustxt + "user<b>@</b>ej☹8d❤:<wbr id=\"__line__\">";
        document.getElementById("input").innerHTML = "";
      }
      else if(previous == "ls") {
        document.getElementById("txt").innerHTML = previoustxt.substring(0, previoustxt.length-4) + previous
            + "<br><span class=\"filename\">vaporwaverize</span><wbr id=\"__line__\"><br><span class=\"filename\">readme.txt</span><wbr id=\"__line__\"><br><span class=\"filename\">site.html</span><wbr id=\"__line__\"><br>user<b>@</b>ej☹8d❤:<wbr id=\"__line__\">";
        document.getElementById("input").innerHTML = "";
      }
      else {
        document.getElementById("txt").innerHTML = previoustxt.substring(0, previoustxt.length-4) + previous + "<br>ERROR: UNRECOGNIZED COMMAND<wbr id=\"__line__\">" + "<br>user<b>@</b>ej☹8d❤:<wbr id=\"__line__\">";
        document.getElementById("input").innerHTML = "";
      }
    }
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
