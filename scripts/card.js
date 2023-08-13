import {
  openPopup,
  closePopup,
  imagePopup,
  popupBg,
  popupTitle,
  templateSelector
} from "./index.js";
const cardPopup = document.querySelector(".popup_type_new-card");

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export default class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
  }


 _setEventListeners(cardElement) {
    const likeElement = cardElement.querySelector(".card__button");
    const buttonDelElement = cardElement.querySelector(".card__deletebutton");
    const imageElement = cardElement.querySelector(".card__image");
    const titleElement = cardElement.querySelector(".card__title");

    likeElement.addEventListener("click", () => {
      likeElement.classList.toggle("card__button_active");
    });

    buttonDelElement.addEventListener("click", () => {
      this._deleteCard(cardElement);
    });

    imageElement.addEventListener("click", () => {
      this._handleImageClick(
        titleElement.textContent,
        imageElement.src,
        titleElement.name
      );
    });
  }

  _deleteCard(cardElement) {
    cardElement.remove();
  }

  _handleImageClick(title, imageUrl, altText) {
    openPopup(imagePopup);
    popupTitle.textContent = title;
    popupBg.src = imageUrl;
    popupBg.alt = altText;
  }

   createCard({ name, link }) {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card");
    const cardElement = templateElement.cloneNode(true);
    const imageElement = cardElement.querySelector(".card__image");
    const textElement = cardElement.querySelector(".card__text");
    const titleElement = textElement.querySelector(".card__title");
    titleElement.textContent = name;
    imageElement.src = link;
    imageElement.alt = name;
    this._setEventListeners(cardElement);
    return cardElement;
  }


 
}
/*const cardListElement = document.querySelector(".cards__list");

initialCards.forEach(function (item) {
const cardInstance = new Card(item); 
const cardElement = cardInstance.createCard(item); 
cardListElement.appendChild(cardElement);
});*/


