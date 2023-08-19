const buttonSubmitElement = document.querySelector(".popup__buttonAddCard");
const inputTitleElement = document.querySelector(".popup__input_type_title");
const inputLinkElement = document.querySelector(".popup__input_type_link");
const cardListElement = document.querySelector(".cards__list");
const imageFormCloseButton = document.querySelector(
  ".popup__close-icon_type_open-card"
);
const imageContainer = document.querySelector(".popup__image-container");
export const popupTitle = imageContainer.querySelector(".popup__image-title");
export const popupBg = imageContainer.querySelector(".popup__image");
const titleElement = document.querySelector(".card__title");
const imageElement = document.querySelector(".card__image");
const cardList = document.querySelector(".cards__list");
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close-icon");
//инпуты и поля текста
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const editedName = document.querySelector(".profile__title");
const editedJob = document.querySelector(".profile__subtitle");
//popup2
const cardOpenButton = document.querySelector(".profile__button");
const cardCloseButton = document.querySelector(
  ".popup__close-icon_type_new-card"
);
//export const cardPopup = document.querySelector(".popup_type_new-card");
export const templateSelector = document.querySelector("#card__template");



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

export const config = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  submitButtonElement: ".popup__button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__input_invalid",
  errorElement: ".error",
  errorActive: "popup__input-error_active",
};
