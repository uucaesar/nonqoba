const forwardBtn = document.querySelector('#forward-arrow');
const backBtn = document.querySelector('#back-arrow');
const images = document.querySelector('.images');
let scrollPosition = 0;

const maxScroll = (images.children.length - 1) * window.innerWidth;

function moveBack() {
    scrollPosition = images.scrollLeft;
    if (scrollPosition > 0) {
        scrollPosition -= window.innerWidth;
        images.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

function moveForward() {
    scrollPosition = images.scrollLeft;
    if (scrollPosition < maxScroll) {
        scrollPosition += window.innerWidth;
        images.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

window.addEventListener('scroll', function() {
    var definitionElements = document.querySelectorAll('.definition, .prop-container');

    definitionElements.forEach(function(element) {
        var top_of_element = element.offsetTop;
        var bottom_of_element = element.offsetTop + element.offsetHeight;
        var bottom_of_screen = window.scrollY + window.innerHeight;
        var top_of_screen = window.scrollY;

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // the element is visible, fade it in
            var childElements = element.children;
            for(var i=0; i<childElements.length; i++) {
                childElements[i].style.transitionDelay = (i * 0.2) + 's'; // add delay to each child
                childElements[i].classList.add('fade-in');
            }
        // } else {
        //     // the element is not visible, fade it out
        //     // var childElements = element.children;
        //     // for(var i=0; i<childElements.length; i++) {
        //     //     childElements[i].style.transitionDelay = ''; // remove delay
        //     //     childElements[i].classList.remove('fade-in');
        //     // }
        }
    });
});



forwardBtn.addEventListener("click", moveForward);
backBtn.addEventListener("click", moveBack);


const closeButton = document.querySelector('#close-overlay');
const galleryContainer = document.querySelector('.mini-gallery');
const overlay = document.querySelector('.overlay');

function closeGallery() {
    galleryContainer.style.display = "none";
    overlay.style.display = "none";
}

var spinner = document.querySelector('.spinner.center');
    setTimeout(function() {
      spinner.style.display = 'none';
    }, 4500);

window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingContainer = document.querySelector('.loading-container');
        loadingContainer.classList.add('hidden');
    }, 6500); // Adjust to match the transition delay
    });



