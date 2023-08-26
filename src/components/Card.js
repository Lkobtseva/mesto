import {
  imagePopup
} from "../pages/index.js";

import Popup from "./Popup.js";
import { popupBg, popupTitle} from "../utils/constants.js";

export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._templateSelector = document.querySelector(templateSelector).content.querySelector('.card');
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    const likeElement = this._cardElement.querySelector(".card__button");
    const buttonDelElement = this._cardElement.querySelector(".card__deletebutton");
    const imageElement = this._cardElement.querySelector(".card__image");
    const titleElement = this._cardElement.querySelector(".card__title");

    likeElement.addEventListener("click", () => {
      likeElement.classList.toggle("card__button_active");
    });

    buttonDelElement.addEventListener("click", () => {
      this._deleteCard(this._cardElement);
    });

    imageElement.addEventListener("click", () => {
      this._handleImageClick(
        titleElement.textContent,
        imageElement.src,
        titleElement.name
      );
    });
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  _handleImageClick(title, imageUrl, altText) {
    open(imagePopup);
    popupTitle.textContent = title;
    popupBg.src = imageUrl;
    popupBg.alt = altText;
  }

  _getTemplate() {
  return this._templateSelector.cloneNode(true);
}

  createCard() {
    this._cardElement = this._getTemplate();
    const imageElement = this._cardElement.querySelector(".card__image");
    const textElement = this._cardElement.querySelector(".card__text");
    const titleElement = textElement.querySelector(".card__title");
    titleElement.textContent = this._data.name;
    imageElement.src = this._data.link;
    imageElement.alt = this._data.name;
    this._setEventListeners();
    return this._cardElement;
  }
}
