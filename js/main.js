
$(document).ready(function(){
	$(".social img").on("mouseover", function(){
		$(this).css("width", "70%");
	}).mouseout(function() {
	    $(this).css("width", "80%");
	});

	$('#nav-toggle').click(function(){
		$(this).toggleClass("active");
	});
})
