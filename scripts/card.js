import {
  openPopup,
  imagePopup,
  popupBg,
  popupTitle,
  getTemplate,
  templateSelector,
} from "./index.js";

export default class Card {
  constructor(data, templateSelector, name, link) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
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

  createCard() {
    const cardElement = getTemplate();
    const imageElement = cardElement.querySelector(".card__image");
    const textElement = cardElement.querySelector(".card__text");
    const titleElement = textElement.querySelector(".card__title");
    titleElement.textContent = this._name;
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._setEventListeners(cardElement);
    return cardElement;
  }
}
