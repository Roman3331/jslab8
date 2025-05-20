const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const indicators = document.querySelectorAll('.carousel-indicators span');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const totalSlides = images.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateCarousel();
}

prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);

updateCarousel();