const initialCards = [
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
  
  const cardForm = document.querySelector(".popup__form_type_new-card");
  const buttonSubmitElement = cardForm.querySelector(".popup__buttonAddCard");
  const inputTitleElement = cardForm.querySelector(".popup__input_type_title");
  const inputLinkElement = cardForm.querySelector(".popup__input_type_link");
  const cardListElement = document.querySelector(".cards__list");
  const templateElement = document.querySelector("#card__template").content.querySelector(".card");

export default class Card {
    constructor(data, templateSelector) {
      this._data = data;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const templateElement = document.querySelector(this._templateSelector).content.querySelector(".card");
      return templateElement.cloneNode(true);
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
        this._handleImageClick(titleElement.textContent, imageElement.src, this._data.name);
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
  
    generateCard() {
      const cardElement = this._getTemplate();
      const textElement = cardElement.querySelector(".card__text");
      const titleElement = textElement.querySelector(".card__title");
      const imageElement = cardElement.querySelector(".card__image");
      const likeElement = textElement.querySelector(".card__button");
  
      titleElement.textContent = this._data.name;
      imageElement.src = this._data.link;
      imageElement.alt = this._data.name;
  
      this._setEventListeners(cardElement);
  
      return cardElement;
    }
  }
  
 
  initialCards.forEach(function (item) {
    const card = new Card(item, "#card__template");
    cardListElement.append(card.generateCard());
  });

  