//----------- Слайдер -----------
let nextSliderBtn = document.querySelector(".next-btn");
let prevSliderBtn = document.querySelector(".prev-btn");

let autoplayInterval = null;

function startAutoplay() {
    if (!autoplayInterval) {
      autoplayInterval = setInterval(nextSlide, 5000);
    }
  }
  
function stopAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
}

startAutoplay();

let slideIndex = 1; // Индекс слайда по умолчанию
showSlides(slideIndex);

function nextSlide() { //Функция увеличивает индекс на 1, показывает следующий слайд
    showSlides(slideIndex += 1);
    stopAutoplay();
    startAutoplay();
}

function prevSlide() { //Функция уменьшает индекс на 1, показывает предыдущий слайд
    showSlides(slideIndex -= 1);
    stopAutoplay();
    startAutoplay();
}

function currentSlide(n) { // Устанавливает текущий слайд
    showSlides(slideIndex = n);
}

function showSlides(n) { //Функция для перелистывания слайдов
    let slides = document.querySelectorAll(".item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slid-index');
    }
    slides[slideIndex - 1].classList.add('slid-index');
}

nextSliderBtn.addEventListener("click", nextSlide);
prevSliderBtn.addEventListener("click", prevSlide);


//----------- Слайдер -----------

const galleryItemLink = document.querySelectorAll('.gallery__item-link');
const modalTitle = document.querySelectorAll('.modal__title')


galleryItemLink.forEach((galleryItemLink, index) => {
  galleryItemLink.addEventListener('click', () => {
    let dataWeddings = galleryItemLink.dataset.weddings;
    let title = modalTitle[index].innerHTML;
    createUrl(dataWeddings, title);
  })
});

function createUrl(dataWeddings, title) {
  localStorage.clear;
  localStorage.setItem("dataWeddings", dataWeddings);
  localStorage.setItem("title", title);
}

