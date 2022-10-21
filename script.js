//leave site alert
function leaveSiteAlert(link) {
	if(confirm("You are about to leave the CSHS website. Are you sure?")){
		window.location.href = link;
	}
}
//slideshow
let slideIndex = 0;
let slideDelay = 5000;
showSlides();
//shuffles slides
function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slides");
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length){slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, slideDelay);
}