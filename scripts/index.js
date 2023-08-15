import { initialCards, config } from "./constants.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
const inputTitleElement = document.querySelector(".popup__input_type_title");
const inputLinkElement = document.querySelector(".popup__input_type_link");

//валидация
const cardForm = document.querySelector(".popup__form_type_new-card");
const formProfile = document.querySelector(".popup__form_type_edit");
const formAddValidation = new FormValidator(config, cardForm);
const formEditValidation = new FormValidator(config, formProfile);
formEditValidation.enableValidation();
formAddValidation.enableValidation();

//открытие и закрытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeOverlay() {
  document.querySelectorAll(".popup").forEach((item) =>
    item.addEventlistener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        closePopup(e.target);
      }
    })
  );
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//popup1
const profilePopup = document.querySelector(".popup_type_edit");
//кнопки
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close-icon");
//инпуты и поля текста
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const editedName = document.querySelector(".profile__title");
const editedJob = document.querySelector(".profile__subtitle");
//открытие и закрытие 1 попапа
profilePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup);
  }
});

profileOpenButton.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = editedName.textContent;
  jobInput.value = editedJob.textContent;
});

profileCloseButton.addEventListener("click", function () {
  closePopup(profilePopup);
});

//обработка формы профиля
function handleFormSubmitPopup(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(jobInput.value);
  editedName.textContent = nameInput.value;
  editedJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
profilePopup.addEventListener("submit", handleFormSubmitPopup);

//popup2
const cardOpenButton = document.querySelector(".profile__button");
const cardCloseButton = document.querySelector(
  ".popup__close-icon_type_new-card"
);
export const cardPopup = document.querySelector(".popup_type_new-card");
export const templateSelector = document.querySelector("#card__template");

//открытие и закрытие 2 попапа
cardOpenButton.addEventListener("click", function () {
  formAddValidation.disableButton();
  openPopup(cardPopup);
});

cardCloseButton.addEventListener("click", function () {
  closePopup(cardPopup);
});

cardPopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(cardPopup);
  }
});

//вставка карточек
export function getTemplate() {
  const templateSelector = document
    .querySelector("#card__template")
    .content.querySelector(".card");
  return templateSelector.cloneNode(true);
}

//обработка формы карточек
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  console.log(inputTitleElement.value);
  console.log(inputLinkElement.value);
  renderCard(
    {
      name: inputTitleElement.value,
      link: inputLinkElement.value,
    },
    cardListElement,
    "prepend"
  );

  cardForm.reset();
  closePopup(cardPopup);
}
cardPopup.addEventListener("submit", handleCardFormSubmit);

function createCard(data) {
  const card = new Card(
    data,
    templateSelector,
    data.name,
    data.link
  ).createCard();
  return card;
}

function renderCard(data, elements) {
  const card = createCard(data);
  elements.prepend(card);
}

const cardListElement = document.querySelector(".cards__list");
initialCards.forEach(function (item) {
  renderCard(item, cardListElement);
});

//popup3
export const imagePopup = document.querySelector(".popup_type_open-card");
const imageFormCloseButton = document.querySelector(
  ".popup__close-icon_type_open-card"
);
const imageContainer = document.querySelector(".popup__image-container");
export const popupTitle = imageContainer.querySelector(".popup__image-title");
export const popupBg = imageContainer.querySelector(".popup__image");
const titleElement = document.querySelector(".card__title");
const imageElement = document.querySelector(".card__image");
const cardList = document.querySelector(".cards__list");

imageFormCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

imagePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup);
  }
});
