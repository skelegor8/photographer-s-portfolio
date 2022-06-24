const body = document.querySelector('body');
const sectionSlider = document.querySelector('.section__slider');
const sliderContainer = document.querySelector('.slider__container');
const sliderList = document.querySelector('.slider__list');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderImg = document.querySelectorAll('.slider__img');

const albumItem = document.querySelectorAll('.album__item');
const albumImg = document.querySelectorAll('.album__img');
const nextSliderBtn = document.querySelector(".next-btn");
const prevSliderBtn = document.querySelector(".prev-btn");
const closeBtn = document.querySelector('.close-btn');

albumImg.forEach((img, index) => img.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/item-${index + 1}.jpg`);
sliderImg.forEach((img, index) => img.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/item-${index + 1}.jpg`);
/*for (let i = 0; i < 3; i++){
  const img = document.createElement('img');
  img.classList.add('album__img')
  img.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/item-${i + 1}.jpg`;
  img.alt = 'image';
  albumItemsList.append(img);
}
*/

albumItem.forEach((albumItem, index) => {
  albumItem.addEventListener('click', () => {
    sliderItem[index].classList.add("slid-index");
    openSlider();
  })
});

function openSlider() {
  body.classList.add("active");
  sectionSlider.classList.add("active");
  sliderContainer.classList.add("active");
  sliderList.classList.add("active");
  sliderItem.forEach(sliderItem => {
    sliderItem.classList.add("active");
  });
  sliderImg.forEach(sliderImg => {
    sliderImg.classList.add("active");
  });
  closeBtn.classList.add("active");
  nextSliderBtn.classList.add("active");
  prevSliderBtn.classList.add("active");
}

closeBtn.addEventListener('click', () => {
  closeSlider();
})

function closeSlider() {
  body.classList.remove("active");
  sliderItem.forEach(sliderItem => {
    sliderItem.classList.remove("slid-index");
  });
  sectionSlider.classList.remove("active");
  sliderContainer.classList.remove("active");
  sliderList.classList.remove("active");
  sliderItem.forEach(sliderItem => {
    sliderItem.classList.remove("active");
  });
  sliderImg.forEach(sliderImg => {
    sliderImg.classList.remove("active");
  });
  closeBtn.classList.remove("active");
  nextSliderBtn.classList.remove("active");
  prevSliderBtn.classList.remove("active");
}


let slideIndex = 1; // Индекс слайда по умолчанию
showSlides(slideIndex);

function nextSlide() { //Функция увеличивает индекс на 1, показывает следующий слайд
    showSlides(slideIndex += 1);
}

function prevSlide() { //Функция уменьшает индекс на 1, показывает предыдущий слайд
    showSlides(slideIndex -= 1);
}

function currentSlide(n) { // Устанавливает текущий слайд
    showSlides(slideIndex = n);
}

function showSlides(n) { //Функция для перелистывания слайдов
    if (n > sliderItem.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = sliderItem.length
    }
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.remove('slid-index');
    }
    sliderItem[slideIndex - 1].classList.add('slid-index');
}

nextSliderBtn.addEventListener("click", nextSlide);
prevSliderBtn.addEventListener("click", prevSlide);