import { galleryItems } from "./gallery-items.js";

const divGalleryRef = document.querySelector(".gallery");

const itemsImages = galleryItems
  .map((item) => {
    return `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"
      title="${item.description}" />
    </a> 
    `;
  })
  .join("");

  divGalleryRef.insertAdjacentHTML('afterbegin', itemsImages);

  let gallery = new SimpleLightbox('.gallery a',{ captions: true });
