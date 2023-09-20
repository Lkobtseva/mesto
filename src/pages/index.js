import "./index.css";
import { initialCards, configValidator, profileOpenButton, cardOpenButton, buttonSubmitElement, avatarEditButton } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { Api }from "../components/Api.js";

//формы
const cardForm = document.querySelector(".popup__form_type_new-card");
const formProfile = document.querySelector(".popup__form_type_edit");
const avatarForm = document.querySelector(".popup__form_type_edit-avatar");

//попап с картинкой
export const popupSelector = document.querySelector(".popup");
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__image-title');
export const imagePopup = document.querySelector(".popup_type_open-card");

//попап редактирования профиля
const profilePopup = document.querySelector(".popup_type_edit");

//попап добавления новой карточки
const cardPopup = document.querySelector(".popup_type_new-card");

//validation


const formEditValidation = new FormValidator(configValidator, formProfile);
formEditValidation.enableValidation();


// UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar"
});
// API
export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: 'c3be00b2-ec0b-4b8e-8979-18e6752e4cfe',
    "content-type": "application/json"
  }
};
const api = new Api(configApi);
let userId;

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cardItems]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id;
    sectionInstance.renderItems(cardItems);
  })
  .catch((err) => console.log(err));

// Section
const sectionInstance = new Section(renderCard, '.cards__list');

function renderCard({data, position = 'append'}) {
  const cardElement = new Card({ data, userId, handleClickLike, handleClickDelete, handleClickCard }, '#card__template').createCardElement();
  sectionInstance.setItem(cardElement, position);
  return cardElement;
}
// Image Popup
const popupImageInstance = new PopupWithImage('.popup_type_open-card');
popupImageInstance.setEventListeners();

function handleClickCard(cardData) {
  popupImageInstance.open(cardData);
}

// Add Card Popup
const popupAddFormInstance = new PopupWithForm('.popup_type_new-card', handleSubmitCard);
popupAddFormInstance.setEventListeners();

cardOpenButton.addEventListener('click', () => {
  popupAddFormInstance.open();
  //.disableButton();  
});

function handleSubmitCard(cardData) {
  popupAddFormInstance.loading(true);
  console.log(cardData);
  api.addNewCard(cardData)
    .then((res) => {
      renderCard({ data: res, position: 'prepend' });
      popupAddFormInstance.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddFormInstance.loading(false));
}
const formAddValidation = new FormValidator(configValidator, cardForm);
formAddValidation.enableValidation();

// Profile Popup
const profilePopupFormInstance = new PopupWithForm(".popup_type_edit", handleSubmitProfile);
profilePopupFormInstance.setEventListeners();

function handleSubmitProfile(data) {
  userInfo.setUserInfo(data);
  profilePopupFormInstance.close();
}

profileOpenButton.addEventListener('click', () => {
  profilePopupFormInstance.setInputValues(userInfo.getUserInfo());
  profilePopupFormInstance.open();
});

// Avatar Popup
const popupAvatarFormInstance = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);
popupAvatarFormInstance.setEventListeners();

function handleSubmitAvatar(avatarData) {
  popupAvatarFormInstance.loading(true);
  api.editProfileAvatar(avatarData)
    .then(() => {
      userInfo.setUserAvatar(avatarData);
      popupAvatarFormInstance.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatarFormInstance.loading(false));
}

avatarEditButton.addEventListener('click', () => {
  popupAvatarFormInstance.open();
});

const validateAvatar = new FormValidator(configValidator, avatarForm);
validateAvatar.enableValidation();


// Card Functions
function handleClickLike(cardElement) {
  if (cardElement.isLiked()) {
    api.unlikeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  } else {
    api.likeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  }
}

const popupWithConfirmationInstance = new PopupWithConfirmation('.popup_type_delete', handleClickDelete);
popupWithConfirmationInstance.setEventListeners();

function handleClickDelete(cardElement) {
  popupWithConfirmationInstance.open();
  popupWithConfirmationInstance.setSubmitAction(() => {
    popupWithConfirmationInstance.loading(true);
    api.removeCard(cardElement.getCardId())
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmationInstance.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupWithConfirmationInstance.loading(false));
  });
}
// Validation
