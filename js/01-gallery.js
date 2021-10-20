import { galleryItems } from "./gallery-items.js";

const divGalleryRef = document.querySelector(".gallery");

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

divGalleryRef.insertAdjacentHTML("afterbegin", itemsImages);

divGalleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();

  const imageUrl = getImageUrl(e);
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEventHandler);

        function onEventHandler(e) {
          if (e.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEventHandler);
          }
        }
      },
    }
  );

  instance.show();
}

function getImageUrl(e) {
  return e.target.dataset.source;
}
