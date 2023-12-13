document.querySelector(".card1").addEventListener("mouseover", (event) => {
    document.querySelector(".cardIcon1").src = "images/peopleHover.png";
    document.querySelector(".cardButton1").classList.add("removeBorder");
});
document.querySelector(".card2").addEventListener("mouseover", (event) => {
    document.querySelector(".cardIcon2").src = "images/placeHover.png";
    document.querySelector(".cardButton2").classList.add("removeBorder");
});
document.querySelector(".card3").addEventListener("mouseover", (event) => {
    document.querySelector(".cardIcon3").src = "images/productHover.png";
    document.querySelector(".cardButton3").classList.add("removeBorder");
});
document.querySelector(".card4").addEventListener("mouseover", (event) => {
    document.querySelector(".cardIcon4").src = "images/programHover.png";
    document.querySelector(".cardButton4").classList.add("removeBorder");
});
var i=0;
for( ; i<4; i++){
    document.querySelectorAll(".card")[i].addEventListener("mouseout", (event) => {
        document.querySelector(".cardIcon1").src = "images/people.png";
        document.querySelector(".cardButton1").classList.remove("removeBorder");
        document.querySelector(".cardIcon2").src = "images/place.png";
        document.querySelector(".cardButton2").classList.remove("removeBorder");
        document.querySelector(".cardIcon3").src = "images/product.png";
        document.querySelector(".cardButton3").classList.remove("removeBorder");
        document.querySelector(".cardIcon4").src = "images/program.png";
        document.querySelector(".cardButton4").classList.remove("removeBorder");
    });
}


var imgElement = document.getElementById('brand');

function updateImage() {
    var screenWidth = window.innerWidth;

    var newSrc = (screenWidth < 600) ? 'images/brandMobile.jpg' : 'images/brand.png';

    // Update the image source
    imgElement.src = newSrc;
}

// Initial update on page load
updateImage();

// Attach the updateImage function to the window resize event
window.addEventListener('resize', updateImage);