//добавить карточку
export const buttonSubmitElement = document.querySelector(".popup__buttonAddCard");
export const cardOpenButton = document.querySelector(".profile__button");
const cardCloseButton = document.querySelector(".popup__close-icon_type_new-card");
const inputTitleElement = document.querySelector(".popup__input_type_name");
const inputLinkElement = document.querySelector(".popup__input_type_link");

//редактировать профиль
export const profileOpenButton = document.querySelector(".profile__edit-button"); 
const profileCloseButton = document.querySelector(".popup__close-icon");
export const avatarEditButton = document.querySelector(".profile__edit-avatar");

//попап с картинкой
const imageFormCloseButton = document.querySelector(".popup__close-icon_type_open-card");
const imageContainer = document.querySelector(".popup__image-container");
export const popupTitle = imageContainer.querySelector(".popup__image-title");
export const popupBg = imageContainer.querySelector(".popup__image");
const titleElement = document.querySelector(".card__title");
const imageElement = document.querySelector(".card__image");
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__image-title');
//попап редактирования профиля
const profilePopup = document.querySelector(".popup_type_edit");

//попап добавления новой карточки
const cardPopup = document.querySelector(".popup_type_new-card");
//инпуты и поля текста
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const editedName = document.querySelector(".profile__title");
const editedJob = document.querySelector(".profile__subtitle");

//разметка
const cardListElement = document.querySelector(".cards__list");
//forms
export const cardForm = document.querySelector(".popup__form_type_new-card");
export const formProfile = document.querySelector(".popup__form_type_edit");
export const avatarForm = document.querySelector(".popup__form_type_edit-avatar");
//попап с картинкой
export const popupSelector = document.querySelector(".popup");
export const imagePopup = document.querySelector(".popup_type_open-card");

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

export const configValidator = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  submitButtonElement: ".popup__button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__input_invalid",
  errorElement: ".error",
  errorActive: "popup__input-error_active",
};

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: 'c3be00b2-ec0b-4b8e-8979-18e6752e4cfe',
    "content-type": "application/json"
  }
};