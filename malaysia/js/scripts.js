
var time= 60*10;
var ora = new Date();
function map() {
		if (window.location != "#/mappa") {
		window.location="#/mappa";
		}
	if (window.location == "#/mappa") {
		window.history.back();		
		}
		//window.location.back();
	}
function drawcircle(div){
	   var canvas = document.getElementById(div);
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 800;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      //context.fillStyle = 'green';
      //context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
}
function countdown(nome) {
	var div = document.getElementById(nome);
	//calcolo tempo
	var adesso = new Date();
	var differenza = (adesso-ora)/1000;
	var percentuale = differenza/60*10;
	//div.innerHTML = "";
	var circle = div.getContext("2d");
	var centroX = 0;
	var centroY = 0;
	//div.innerHTML = height;
	var radius = 59;
	var ampiezza= (2*Math.PI)*percentuale/100;
	//debug

	circle.save();
	circle.translate(div.width / 2, div.height / 2);
	
	//circle.rotate(3*Math.PI/2);
	circle.scale(2,1);
	circle.beginPath();
	circle.arc(centroX, centroY, radius, 0, ampiezza, false);
	circle.restore();
	circle.lineWidth = 7;
	circle.strokeStyle = "blue";
	circle.stroke();
	//if (percentuale <= 1) {
		setTimeout("countdown('counter');", 500);
	//}
	//DEBUG
	document.getElementById("display").innerHTML=parseInt(differenza/60)+"\" " + parseInt(differenza%60);
}