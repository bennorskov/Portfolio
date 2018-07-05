var $intro;
var rotateInterval
$(document).ready(function() {
	setTimeout(function () {
		$(".ui__navigationPulldown").removeClass("beforeLoad");
	}, 300);
	//Scroll in after page load to show what's possible
	$intro = $("body");
	rotateInterval = setInterval(function() {animateBackground()}, 40);

	$(".ui__navigationPulldown").on("click", function() { 
		showNav(); 
	});
	$(".hi").on("click", function() {
		scrollPage(".about");
	});
	$(".slideMenuNavButton__contact").on("click", function() {
		scrollPage(".contact")
	});
	$(".slideMenuNavButton__about").on("click", function() {
		scrollPage(".about")
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
	$(".fullscreen__description--workClick").on("click", function() {
		showNav();
	});

	showHideAbout(); //hide about text at first
	$(".about .fullscreen__bigHeading").on("click", function() {
		showHideAbout();
	});

	$(".ui__externalContact--emailClick").on("click", function () {
		showEmailOverlay();
	});
});

function showNav() {
	$(".navigation").toggleClass("collapsed");
	slideMenus();
}
function scrollPage(_where) {
	$('html,body').animate({ scrollTop: $(_where).offset().top}, 'fast');
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
function showEmailOverlay() {
		
}
var angleStep = .5;
var startAngl = 45;
function animateBackground() {
	startAngl -= angleStep;
	$intro.css("background", "linear-gradient("+startAngl+"deg, #1a8cbc, #d8aaa9) fixed no-repeat");
}

function showHideAbout() {
	$(".about .fullscreen__description").fadeToggle();
	$(".ui__aboutArrow").toggleClass("rotated");
	$(".about").toggleClass("showGradient");
	$(".navigation").addClass("collapsed");
}