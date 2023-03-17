// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const gallerySet = document.querySelector('.gallery');

const galleryMarkup = createMarkupSample(galleryItems);

function createMarkupSample(galleryItems) {
  return galleryItems
    .map(objectImage => {
      return `<a class="gallery__item" href="${objectImage.original}">
          <img
            class="gallery__image"
            src="${objectImage.preview}"
            alt="${objectImage.description}"
          />
        </a>`;
    })
    .join('');
}
gallerySet.insertAdjacentHTML('afterbegin', galleryMarkup);

console.log(galleryMarkup);

let gallery = new SimpleLightbox('.gallery .gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
