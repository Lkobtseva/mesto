import "./index.css";
import { configValidator, profileOpenButton, cardOpenButton, avatarEditButton, cardForm, formProfile, avatarForm, configApi } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { Api } from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

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
function renderCard({ data, position = 'append' }) {
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
});

function handleSubmitCard(cardData) {
  const inputName = document.querySelector('[name="name"]');
  const inputLink = document.querySelector('[name="link"]');
  const nameValue = inputName.value;
  const linkValue = inputLink.value;
  cardData.title= nameValue;
  cardData.link = linkValue;

  popupAddFormInstance.loading(true);
  api.addNewCard(cardData)
    .then((res) => {
      console.log(cardData);
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
  if (cardElement.likeCard()) {
    api.unlikeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  } else {
    api.likeCard(cardElement.getCardId())
      .then((res) => cardElement.likeCard(res.likes.length))
      .catch((err) => console.log(err));
  }
}
// PopupWithConfirmation
const popupWithConfirmationInstance = new PopupWithConfirmation('.popup_type_delete-card', handleClickDelete);
popupWithConfirmationInstance.setEventListeners();

function handleClickDelete(cardElement) {
  popupWithConfirmationInstance.open();
  popupWithConfirmationInstance.submit(() => {
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