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
const inputName = document.querySelector('[name="name"]');
const inputLink = document.querySelector('[name="link"]');

// UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar"
});

// API
const api = new Api(configApi);
let userId;

api.getUserData()
  .then(userData => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id;
    return api.getInitialCards();
  })
  .then(cardItems => {
    sectionItem.renderItems(cardItems);
  })
  .catch(err => {
    console.log(err);
  });

// Section
const sectionItem = new Section(renderCard, '.cards__list');
function renderCard({ data, position = 'append' }) {
  const cardInstance = new Card({ data, userId, handleLikeCard, handleDeleteCard, handleClickCard }, '#card__template');
  const cardElement = cardInstance.createCardElement();
  sectionItem.setItem(cardElement, position);
}

// Image Popup
const popupImageItem = new PopupWithImage('.popup_type_open-card');
popupImageItem.setEventListeners();
function handleClickCard(cardData) {
  popupImageItem.open(cardData);
}

// Add Card Popup
const popupAddFormItem = new PopupWithForm('.popup_type_new-card', handleSubmitCard);
popupAddFormItem.setEventListeners();
cardOpenButton.addEventListener('click', () => {
  popupAddFormItem.open();
  formAddValidation.disableButton();

});

function handleSubmitCard() {
  const formData = popupAddFormItem.getInputValues();
  popupAddFormItem.renderLoading(true);
  api.addNewCard(formData)
    .then((res) => {
      console.log(formData);
      renderCard({ data: res, position: 'prepend' });
      popupAddFormItem.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddFormItem.renderLoading(false);
    });
}

const formAddValidation = new FormValidator(configValidator, cardForm);
formAddValidation.enableValidation();

// Profile Popup
const profilePopupFormItem = new PopupWithForm(".popup_type_edit", handleSubmitProfile);
profilePopupFormItem.setEventListeners();

profileOpenButton.addEventListener('click', () => {
  profilePopupFormItem.setInputValues(userInfo.getUserInfo());
  profilePopupFormItem.open();
});

function handleSubmitProfile(dataProfile) {
  profilePopupFormItem.renderLoading(true);
  api.editUserProfile(dataProfile)
    .then(() => {
      userInfo.setUserInfo(dataProfile);
      profilePopupFormItem.close()
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopupFormItem.renderLoading(false));
}

const formEditValidation = new FormValidator(configValidator, formProfile);
formEditValidation.enableValidation();
// Avatar Popup
const popupAvatarFormItem = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);
popupAvatarFormItem.setEventListeners();

function handleSubmitAvatar(avatarData) {
  popupAvatarFormItem.renderLoading(true);

  api.editProfileAvatar(avatarData)
    .then(() => {
      userInfo.setUserAvatar(avatarData);
      popupAvatarFormItem.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarFormItem.renderLoading(false);
    });
}

avatarEditButton.addEventListener('click', () => {
  popupAvatarFormItem.open();
  validateAvatar.disableButton();
});
const validateAvatar = new FormValidator(configValidator, avatarForm);
validateAvatar.enableValidation();

// Card Functions
function handleLikeCard(cardElement) {
  const cardId = cardElement.getCardId();
  const checkLike = cardElement.checkLike();

  const apiCall = checkLike ? api.unlikeCard(cardId) : api.likeCard(cardId);

  apiCall
    .then((res) => cardElement.likeCard(res.likes.length))
    .catch((err) => console.log(err));
}


// PopupWithConfirmation
const popupWithConfirmationItem = new PopupWithConfirmation('.popup_type_delete-card', handleDeleteCard);
popupWithConfirmationItem.setEventListeners();

function handleDeleteCard(cardElement) {
  popupWithConfirmationItem.open();
  popupWithConfirmationItem.submit(() => {
    popupWithConfirmationItem.renderLoading(true);
    api.removeCard(cardElement.getCardId())
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmationItem.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithConfirmationItem.renderLoading(false);
      });
  });
}