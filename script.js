var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var startParty = document.getElementById("startdj");
var stopParty = document.getElementById("stopdj");

console.log(color1.value);	

window.onload = function(){
	setGradient();
}

function getRandomGradient(){
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

function setRandomColor(temp){

		color1.value = getRandomGradient();
		color2.value = getRandomGradient();
		setGradient();
}
function startRandomColor(){
	setRandomColor(true);	
}

function stopRandomColor(){
	setRandomColor(false);
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";" ;
}
 
function startPartyColor(){

} 

startParty.addEventListener("click", startRandomColor);
stopParty.addEventListener("click", stopRandomColor)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);