const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

let index = 0;


const updateCarousel = (index) => {
    slides.style.transform = `translateX(-${index * 20}%)`
}

setInterval(() => {
    index = (index + 1) % (slide.length - 2);
    updateCarousel(index)
}, 3000)

