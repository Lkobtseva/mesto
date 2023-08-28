import "./index.css";

import { initialCards, config, profileOpenButton, cardOpenButton } from "../utils/constants.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

///class section
const rendererCard = (data) => {
  const card = new Card(data, "#card__template", handleCardClick).createCard();
  defaultCardList.setItem(card);
};

const defaultCardList = new Section({ items: initialCards, renderer: rendererCard }, ".cards__list");
defaultCardList.renderItems();

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

///class userinfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
});
const userData = userInfo.getUserInfo();

///popupы
export const popupSelector = document.querySelector(".popup");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
export const imagePopup = document.querySelector(".popup_type_open-card");


export const popupOpenImage = new PopupWithImage(".popup_type_open-card");

const profilePopupForm = new PopupWithForm(".popup_type_edit", (data) => {
  userInfo.setUserInfo(data);
  profilePopupForm.close();
});
const addCardPopupForm = new PopupWithForm(".popup_type_new-card", (data) => {
  rendererCard(data);
  addCardPopupForm.close();
});

profilePopupForm.setEventListeners();
addCardPopupForm.setEventListeners();
popupOpenImage.setEventListeners();



cardOpenButton.addEventListener('click', () => {
  //addCardPopupForm.resetValidation();
  addCardPopupForm.open();
})

profileOpenButton.addEventListener('click', () => {
  profilePopupForm.setInputValues(userInfo.getUserInfo());
  profilePopupForm.open();
})

//валидация
const cardForm = document.querySelector(".popup__form_type_new-card");
const formProfile = document.querySelector(".popup__form_type_edit");
const formAddValidation = new FormValidator(config, cardForm);
const formEditValidation = new FormValidator(config, formProfile);
formEditValidation.enableValidation();
formAddValidation.enableValidation();
