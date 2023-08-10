import {
  openPopup,
  closePopup,
  imageForm,
  popupBg,
  popupTitle,
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

  _getTemplate() {
    this._cardForm = document.querySelector(".popup__form_type_new-card");
    this._buttonSubmitElement = this._cardForm.querySelector(".popup__buttonAddCard");
    this._inputTitleElement = this._cardForm.querySelector(".popup__input_type_title");
    this._inputLinkElement = this._cardForm.querySelector(".popup__input_type_link");
    this._cardListElement = document.querySelector(".cards__list");
    this._templateElement = document.querySelector("#card__template").content.querySelector(".card");
    return this._templateElement.cloneNode(true);
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
    openPopup(imageForm);
    popupTitle.textContent = title;
    popupBg.src = imageUrl;
    popupBg.alt = altText;
  }


  createCard({ name, link }) {
    const templateElement = document.querySelector("#card__template").content.querySelector(".card");
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
    
    handleCardFormSubmit(evt) {
    evt.preventDefault();
    const inputTitleElement = cardForm.querySelector(".popup__input_type_title");
    const inputLinkElement = cardForm.querySelector(".popup__input_type_link");
    
    console.log(inputTitleElement.value);
    console.log(inputLinkElement.value);
    this.renderCard(
    {
    name: inputTitleElement.value,
    link: inputLinkElement.value
    },
    cardListElement,
    "prepend"
    );
    
    cardForm.reset();
    closePopup(cardPopup);
    }
    
    renderCard(data, container, position = "append") {
    switch (position) {
    case "append":
    container.append(this.createCard(data));
    break;
    case "prepend":
    container.prepend(this.createCard(data));
    break;
    case "before":
    container.before(this.createCard(data));
    break;
    case "after":
    container.after(this.createCard(data));
    break;
    default:
    break;
    }
    }
    }
    
    // Создание экземпляра класса
    const cardInstance = new Card();
    
    cardPopup.addEventListener("submit", cardInstance.handleCardFormSubmit.bind(cardInstance));
    const cardListElement = document.querySelector(".cards__list");
    const cardForm = document.querySelector(".popup__form_type_new-card");
    initialCards.forEach(function (item) {
    cardInstance.renderCard(item, cardListElement, "append");
    });
