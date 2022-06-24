let galleryItemLink = document.querySelectorAll('.gallery__item-link');



galleryItemLink.forEach(galleryItemLink => {
  galleryItemLink.addEventListener('click', () => {
    let dataWeddings = galleryItemLink.dataset.weddings;
    createUrl(dataWeddings);
  })
});

function createUrl(dataWeddings) {
  localStorage.clear;
  localStorage.setItem("dataWeddings", dataWeddings);
}


 





