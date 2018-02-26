$(document).ready(function() {
	setTimeout(function () {
		$(".ui__navigationPulldown").removeClass("beforeLoad");
	}, 300);
	//Scroll in after page load to show what's possible

	$(".ui__navigationPulldown").on("click", function() { 
		showNav(); 
	});
	$(".slideMenuNavButton").on("click", function () {
		slideMenus();
	});
});

function showNav() {
	$(".navigation").toggleClass("collapsed");
	$(".navigation").removeClass("showSecondaryMenu");
}
function slideMenus() {
	$(".navigation").toggleClass("showSecondaryMenu");
}