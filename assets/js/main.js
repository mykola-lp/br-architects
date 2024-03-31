// Defines two functions: openNav() and closeNav() for full and mobile screens.
var navMenu = document.querySelector(".menu");
// @todo: js code for close/open btn and css fix after screen change.
function openNavMobile() {
    navMenu.classList.add("open");
    navMenu.style.width = "100%";
}

function closeNavMobile() {
    navMenu.classList.remove("open");
    navMenu.style.width = "0";
}

function openNavDesktop() {
    navMenu.classList.add("open");
    navMenu.style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
}

function closeNavDesktop() {
    navMenu.classList.remove("open");
    navMenu.style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
}

function openNav() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 641 && screenWidth <= 1024) {
        openNavDesktop();
    } else {
        openNavMobile();
    }
}

function closeNav() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 640) {
        closeNavMobile();
    } else {
        closeNavDesktop();
    }
}

// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------

// Toggle grid padding
function toggleGridPadding() {
    // @todo change: start screen with all images without padding,
    //               after click on the button "Toggle" - add paddings
    //               between photos amd person name with job title
    //               under image.
    var x = document.getElementById("t-grid");
    if (x.className === "gr-row") {
        x.className = "gr-row-padding";
    } else {
        x.className = x.className.replace("gr-row-padding", "gr-row");
    }
}

// --------------------------------------------------------------------------

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// --------------------------------------------------------------------------

// Get the button
var scrollToTopBtn = document.getElementById("btn-go-top");

// Function to show or hide the "Go To Top" button based on the page position
function scrollFunction() {
    // If the page is scrolled more than 20 pixels from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Show the button
        scrollToTopBtn.style.display = "inline-block";
    } else {
        // Otherwise, hide the button
        scrollToTopBtn.style.display = "none";
    }
}

// Add scroll event listener to call the scrollFunction
window.onscroll = function() {
    scrollFunction();
};

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE, and Opera
    document.documentElement.scrollTop = 0;
}

// Add event listener for the "Go To Top" button
scrollToTopBtn.addEventListener("click", scrollToTop);