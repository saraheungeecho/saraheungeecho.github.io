$(document).ready(function(){	

	$(document).scroll(function() {
		console.log($(window).scrollTop());
	});

$(function() {
	$('body').removeClass('fade-out');
});

$(".topbutton").click(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

});