$(document).ready(function(){
	var c = $("#c");
	var ctx = c.getContext("2d");

	var image = new Image();

	image.onload = function(){
		console.log("Loaded image");
	}

	image.src = "#";
});