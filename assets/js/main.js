// Find the image and popup.
const popupImage = document.querySelector('.team-photo');
const popup = document.getElementById('image-popup');
const popupContent = document.querySelector('.popup-content');

// When click on the image - display a popup.
popupImage.addEventListener('click', function() {
    popup.style.display = 'block';
    popupContent.src = this.src;
});

// When click on the button to close the popup - hide it.
popup.addEventListener('click', function(event) {
    if (event.target === this || event.target.className === 'close') {
        popup.style.display = 'none';
    }
});

// @todo re-write js code.

// --------------------------------------------------------------------------

// Find the image and popup.
const prjPopupImage = document.querySelector('.house-design');
const prjPopup = document.getElementById('prj-popup');
const prjPopupContent = document.querySelector('.prj-popup-content');

// When click on the image - display a popup.
prjPopupImage.addEventListener('click', function() {
    prjPopup.style.display = 'block';
    prjPopupContent.src = this.src;
});

// When click on the button to close the popup - hide it.
prjPopup.addEventListener('click', function(event) {
    if (event.target === this || event.target.className === 'close') {
        prjPopup.style.display = 'none';
    }
});

// --------------------------------------------------------------------------

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("prj-slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}