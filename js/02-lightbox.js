import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

renderGalleryItems(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

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
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
          </li>`;
}
