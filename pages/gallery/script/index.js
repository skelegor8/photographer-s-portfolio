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


 





