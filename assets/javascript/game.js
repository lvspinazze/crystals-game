$(document).ready(function() {

var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = Math.floor(Math.random() * 120) + 1;

$("#random-number").html("Target Score: " + targetNumber);
console.log(targetNumber);

var crystals = ["assets/images/amethyst.png", "assets/images/aquamarine.png", "assets/images/diamond.png", "assets/images/emerald.png"];

for (var i = 0; i < crystals.length; i++) {

	var pointValue = Math.floor(Math.random() * 12) + 1;

	$("crystals").attr(pointValue);
	console.log(pointValue);

	$("#images").append("<img class=crystal-image src=" + crystals[i] + ">");
}

$(".crystal-image").on ("click", function() {

	crystalValue = crystals.pointValue;

	$("#score").html("Score: " + counter);

	console.log(counter);
	

})





























});