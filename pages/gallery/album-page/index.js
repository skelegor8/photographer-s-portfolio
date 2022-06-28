const body = document.querySelector('body');
const sectionSlider = document.querySelector('.section__slider');
const sliderContainer = document.querySelector('.slider__container');
const sliderList = document.querySelector('.slider__list');

const albumItemsList = document.querySelector('.album__items-list');
const column_1 = document.querySelector('.column-1');
const column_2 = document.querySelector('.column-2');
const column_3 = document.querySelector('.column-3');
const column_4 = document.querySelector('.column-4');

const nextSliderBtn = document.querySelector(".next-btn");
const prevSliderBtn = document.querySelector(".prev-btn");
const closeBtn = document.querySelector('.close-btn');

const title = document.querySelector('.title');

title.innerHTML = localStorage.getItem("title");

async function populate() {
  const requestURL = '../../imgUrls.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const imgUrlsText = await response.text();

  const imgUrls = JSON.parse(imgUrlsText);
  imgAddUrl(imgUrls);
}
let slideIndex = 0;

function imgAddUrl(obj) {
  let indexAlbum = 1;
  for (let i = 0; i < obj[`${localStorage.getItem("dataWeddings")}`].length; i++) {
    const div = document.createElement('div');
    div.classList.add('album__item');
    div.id = i;
     if (indexAlbum == 1) {
       column_1.append(div);
       indexAlbum++;
      } else if(indexAlbum == 2) {
       column_2.append(div);
       indexAlbum++;
      } else if(indexAlbum == 3) {
        column_3.append(div);
        indexAlbum++;
       } else if(indexAlbum == 4) {
        column_4.append(div);
        indexAlbum = 1;
       }
      const img = document.createElement('img');
      img.classList.add('album__img');
      img.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/${obj[`${localStorage.getItem("dataWeddings")}`][i]}`;
      img.alt = 'image';
      div.append(img);
  }

  const sliderItem = document.querySelector('.slider__item');
  const sliderImg = document.querySelector('.slider__img');
  
  const albumItem = document.querySelectorAll('.album__item');
  const albumImg = document.querySelectorAll('.album__img');
  
  
  albumItem.forEach((albumItem) => {
    albumItem.addEventListener('click', () => {
      let index = albumItem.id
      slideIndex = Number(index);
      sliderImg.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/${obj[`${localStorage.getItem("dataWeddings")}`][index]}`;
      openSlider();
    })
  });
  
  function openSlider() {
    body.classList.add("active");
    sectionSlider.classList.add("active");
    sliderContainer.classList.add("active");
    sliderList.classList.add("active");
    sliderItem.classList.add("active");
    sliderImg.classList.add("active");
    closeBtn.classList.add("active");
    nextSliderBtn.classList.add("active");
    prevSliderBtn.classList.add("active");
  }
  
  closeBtn.addEventListener('click', () => {
    closeSlider();
  })
  
  function closeSlider() {
    body.classList.remove("active");
    sliderItem.classList.remove("active");
    sectionSlider.classList.remove("active");
    sliderContainer.classList.remove("active");
    sliderList.classList.remove("active");
    sliderItem.classList.remove("active");
    sliderImg.classList.remove("active");
    closeBtn.classList.remove("active");
    nextSliderBtn.classList.remove("active");
    prevSliderBtn.classList.remove("active");
  }
  
  
   // Индекс слайда по умолчанию
  //showSlides(slideIndex);
  
  function nextSlide() { //Функция увеличивает индекс на 1, показывает следующий слайд
      showSlides(++slideIndex);
  }
  
  function prevSlide() { //Функция уменьшает индекс на 1, показывает предыдущий слайд
      showSlides(--slideIndex);
  }
    
  function showSlides(n) { //Функция для перелистывания слайдов
    if (n > albumItem.length - 1) {
      n = 0;
      sliderImg.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/${obj[`${localStorage.getItem("dataWeddings")}`][n]}`;
    } else if (n < 0) {
      n = albumItem.length - 1;
      sliderImg.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/${obj[`${localStorage.getItem("dataWeddings")}`][n]}`;
    } else {
      sliderImg.src = `../../../assets/img/gallery/${localStorage.getItem("dataWeddings")}/${obj[`${localStorage.getItem("dataWeddings")}`][n]}`;
    }
    
  }
  nextSliderBtn.addEventListener("click", nextSlide);
  prevSliderBtn.addEventListener("click", prevSlide);
}

populate();





