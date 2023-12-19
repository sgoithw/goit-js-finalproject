import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

renderGalleryItems(galleryItems);

galleryContainer.addEventListener("click", handleImageClick);

/**
 * Opens modal window with original image
 * @param {*} e
 * @returns
 */
function handleImageClick(e) {
  e.preventDefault();

  const image = e.target;

  if (!image.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${image.dataset.original}" width="800" height="600">
    `);

  instance.show();

  initLightBoxActions(instance);
}

/**
 * Initializes lightbox actions
 * @param {BasicLightBox} instance
 */
function initLightBoxActions(instance) {
  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      window.removeEventListener("keydown", onEscKeyPress);
      instance.close();
    }
  }
}

/**
 * Renders gallery items
 * @param galleryItems
 */
function renderGalleryItems(galleryItems) {
  galleryContainer.innerHTML = galleryItems.map(getImageHtml).join("");
}

/**
 * Returns gallery item html
 * @param galleryItem
 * @returns
 */
function getImageHtml({ preview, original, description }) {
  return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-original="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`;
}
