$(document).ready(function() {
	setTimeout(function () {
		$(".navigationPulldown").removeClass("beforeLoad");
	}, 300);
	//Scroll in after page load to show what's possible

	$(".navigationPulldown").on("click", function() { 
		showNav(); 
	});
	$(".link").on("click", function () {
		if ($(this).hasClass("slideMenuNavButton")) {
			slideMenus();
		} else {
			showNav();
		}
	});
});

function showNav() {
	$(".navigation").toggleClass("collapsed");
	$(".navigation").removeClass("showSecondaryMenu");
}
function slideMenus() {
	$(".navigation").toggleClass("showSecondaryMenu");
}