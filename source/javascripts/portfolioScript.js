$(document).ready(function() {
	setTimeout(function () {
		$(".ui__navigationPulldown").removeClass("beforeLoad");
	}, 300);
	//Scroll in after page load to show what's possible

	$(".ui__navigationPulldown").on("click", function() { 
		showNav(); 
	});
	$(".slideMenuNavButton__personal").on("click", function () {
		slideMenus("personal");
	});
	$(".slideMenuNavButton__antidote").on("click", function () {
		slideMenus("antidote");
	});
	$(".slideMenuNavButton").on("click", function () {
		slideMenus();
	});
});

function showNav() {
	$(".navigation").toggleClass("collapsed");
	slideMenus();
}
function slideMenus(_type) {
	if (_type == "personal") {
		$(".navigation__secondaryMenu--personalMenu").show();
		$(".navigation__secondaryMenu--antidoteMenu").hide();
	}
	if (_type == "antidote") {
		$(".navigation__secondaryMenu--personalMenu").hide();
		$(".navigation__secondaryMenu--antidoteMenu").show();
	}
	if (_type != null) {
		$(".navigation").addClass("showSecondaryMenu");	
	} else {
		$(".navigation").removeClass("showSecondaryMenu");
	}
}