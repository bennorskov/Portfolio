var $intro;
$(document).ready(function() {
	setTimeout(function () {
		$(".ui__navigationPulldown").removeClass("beforeLoad");
	}, 300);
	//Scroll in after page load to show what's possible
	$intro = $(".intro");
	setInterval(function() {animateBackground()}, 30);

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

	showHideAbout(); //hide about text at first
	$(".about .fullscreen__bigHeading").on("click", function() {
		showHideAbout();
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
var angleStep = .5;
var startAngl = 45;
function animateBackground() {
	startAngl -= angleStep;
	$intro.css("background", "linear-gradient("+startAngl+"deg, #1a8cbc, #d8aaa9)");
}

function showHideAbout() {
	$(".about .fullscreen__description").fadeToggle();
	$(".ui__aboutArrow").toggleClass("rotated");
	$(".about").toggleClass("showGradient");
}