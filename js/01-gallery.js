import { galleryItems } from "./gallery-items.js";


const refs = {
  divGallery: document.querySelector(".gallery"),
};

const itemsImages = galleryItems
  .map((item) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>    
    `;
  })
  .join("");

refs.divGallery.insertAdjacentHTML("afterbegin", itemsImages);

refs.divGallery.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
  return e.target.dataset.source;
}


console.log(galleryItems);
