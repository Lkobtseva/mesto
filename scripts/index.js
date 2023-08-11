const CardItem = new Card();
const cardForm = document.querySelector(".popup__form_type_new-card");
import Card from './card.js';
new Card();
import FormValidator from './FormValidator.js';
import { config } from './FormValidator.js';

//popup1
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close-icon");
const profileForm = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const editedName = document.querySelector(".profile__title");
const editedJob = document.querySelector(".profile__subtitle");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.addEventListener("keydown", closeByEsc);
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

profileForm.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profileForm);
  }
});

profileOpenButton.addEventListener("click", function () {
  openPopup(profileForm);
  nameInput.value = editedName.textContent;
  jobInput.value = editedJob.textContent;
});

profileCloseButton.addEventListener("click", function () {
  closePopup(profileForm);
});

function handleFormSubmitPopup(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(jobInput.value);
  editedName.textContent = nameInput.value;
  editedJob.textContent = jobInput.value;
  closePopup(profileForm);
}
profileForm.addEventListener("submit", handleFormSubmitPopup);


//popup2
const cardOpenButton = document.querySelector(".profile__button");
const cardCloseButton = document.querySelector(
  ".popup__close-icon_type_new-card"
);
export const cardPopup = document.querySelector(".popup_type_new-card");

cardOpenButton.addEventListener("click", function () {
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

/*//добавление новой карточки
function createCard({ name, link }) {
  const templateElement = document.querySelector("#card__template").content.querySelector(".card");
  const cardElement = templateElement.cloneNode(true);
  const buttonDelElement = cardElement.querySelector(".card__deletebutton");
  const imageElement = cardElement.querySelector(".card__image");
  const textElement = cardElement.querySelector(".card__text");
  const titleElement = textElement.querySelector(".card__title");
  const likeElement = textElement.querySelector(".card__button");
  titleElement.textContent = name;
  imageElement.src = link;
  imageElement.alt = name;
  _setEventListeners(cardElement);
  return cardElement;
}
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputTitleElement = cardForm.querySelector(".popup__input_type_title");
  const inputLinkElement = cardForm.querySelector(".popup__input_type_link");
 
  console.log(inputTitleElement.value);
  console.log(inputLinkElement.value);
  renderCard(
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
cardPopup.addEventListener("submit", handleCardFormSubmit);

function renderCard(data, container, position = "append") {
  switch (position) {
    case "append":
      container.append(createCard(data));
      break;
    case "prepend":
      container.prepend(createCard(data));
      break;
    case "before":
      container.before(createCard(data));
      break;
    case "after":
      container.after(createCard(data));
      break;
    default:
      break;
  }
}
const cardListElement = document.querySelector(".cards__list");
initialCards.forEach(function (item) {
  renderCard(item, cardListElement, "append");
});
*/

//popup3
export const imageForm = document.querySelector(".popup_type_open-card");
const imageFormCloseButton = document.querySelector(".popup__close-icon_type_open-card");
const imageContainer = document.querySelector(".popup__image-container");
export const popupTitle = imageContainer.querySelector(".popup__image-title");
export const popupBg = imageContainer.querySelector(".popup__image");
const titleElement = document.querySelector(".card__title");
const imageElement = document.querySelector(".card__image");
const cardList = document.querySelector(".cards__list");


imageFormCloseButton.addEventListener("click", function () {
  closePopup(imageForm);
});

imageForm.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imageForm);
  }
});
imageElement.addEventListener("click", function () {
  openPopup(imageForm);
  popupTitle.textContent = titleElement.textContent;
  popupBg.src = imageElement.src;
  popupBg.alt = name;
});



const formElements = document.querySelectorAll('.popup__form'); 
formElements.forEach((formElement) => {
const formValidator = new FormValidator(config, formElement);
formValidator.enableValidation();
});
