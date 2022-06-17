//----------- Слайдер -----------
let nextSliderBtn = document.querySelector(".next-btn");
let prevSliderBtn = document.querySelector(".prev-btn");

timerSlider(0);

let slideIndex = 1; // Индекс слайда по умолчанию
showSlides(slideIndex);

function nextSlide() { //Функция увеличивает индекс на 1, показывает следующий слайд
    showSlides(slideIndex += 1);
    clearInterval(sliderInterval);
    timerSlider(2000);
}

function prevSlide() { //Функция уменьшает индекс на 1, показывает предыдущий слайд
    showSlides(slideIndex -= 1);
    clearInterval(sliderInterval);
    timerSlider(2000);
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

function timerSlider(seconds) {
    let sliderInterval = setInterval(nextSlide, 5000);
    setTimeout(sliderInterval, seconds);
}
//----------- Слайдер -----------



