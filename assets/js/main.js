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