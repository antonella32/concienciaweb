console.log("Con Ciencia Project activo ✨");

// Carrusel simple
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function showSlide() {
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % images.length;
  showSlide();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + images.length) % images.length;
  showSlide();
});
