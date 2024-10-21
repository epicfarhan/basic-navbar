// navbar

var navbtn = document.querySelector('.hamburger')
var mobileNav = document.querySelector('.mobile-nav')
var mobileNavCross = document.querySelector('.close');
navbtn.addEventListener('click', function() {
 mobileNav.style.width = "100%";
 mobileNavCross.style.display = "initial"
})

mobileNavCross.addEventListener('click', function(){
	mobileNav.style.width = "0%";
	this.style.display = "none";
})