import "./index.css";
import { initialCards, config, profileOpenButton, cardOpenButton, buttonSubmitElement } from "../utils/constants.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

//формы
const cardForm = document.querySelector(".popup__form_type_new-card");
const formProfile = document.querySelector(".popup__form_type_edit");

//попап с картинкой
export const popupSelector = document.querySelector(".popup");
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__image-title');
export const imagePopup = document.querySelector(".popup_type_open-card");

//попап редактирования профиля
const profilePopup = document.querySelector(".popup_type_edit");

//попап добавления новой карточки
const cardPopup = document.querySelector(".popup_type_new-card");

//инициализвция и обработчики
const popupOpenImage = new PopupWithImage('.popup_type_open-card');
popupOpenImage.setEventListeners();
const handleCardClick = (name, link) => {
  popupOpenImage.open(name, link);
};

const profilePopupForm = new PopupWithForm(".popup_type_edit", (data) => {
  userInfo.setUserInfo(data);
  profilePopupForm.close();
});
profilePopupForm.setEventListeners();

const addCardPopupForm = new PopupWithForm(".popup_type_new-card", handleSubmitForm);
addCardPopupForm.setEventListeners();

function handleSubmitForm(data) {

  const cardData = {
    name: data.title,
    link: data.link,
  };
  renderCard(cardData);
  addCardPopupForm.close();
}

///section создание карточек 
const renderCard = (data) => {
  const card = new Card({ data, handleCardClick },
    "#card__template").createCard();
  defaultCardList.setItem(card);
};

const defaultCardList = new Section({ items: initialCards, renderer: renderCard }, ".cards__list");
defaultCardList.renderItems();

//сабмиты 
cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});
formProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

cardOpenButton.addEventListener('click', () => {
  addCardPopupForm.open();
  formAddValidation.disableButton();
})

profileOpenButton.addEventListener('click', () => {
  profilePopupForm.open();
  formEditValidation.disableButton();
})


///userinfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
});

profileOpenButton.addEventListener('click', () => {
  profilePopupForm.setInputValues(userInfo.getUserInfo());
  profilePopupForm.open();
})

//валидация
const formAddValidation = new FormValidator(config, cardForm);
const formEditValidation = new FormValidator(config, formProfile);
formEditValidation.enableValidation();
formAddValidation.enableValidation();