/*import './index.css';*/
import { initialCards, config } from "../utils/constants.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

///class section
const rendererCard = (data) => {
  const card = new Card(data, "template", handleCardClick).create();
  defaultCardList.addItem(card)
};

const defaultCardList = new Section(
  {
   items: initialCards,
   renderer: rendererCard
  },
"#card__template"
);
defaultCardList.renderCards();


function handleCardClick(name, link) {
  imagePopup.open(name, link);
};


///class popup, open/close

const profilePopup = new Popup(".popup_type_edit");
profilePopup.setEventListeners();

const cardPopup = new Popup(".popup_type_new-card");
cardPopup.setEventListeners();


///class userinfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
});

const userData = userInfo.getUserInfo();
console.log(userData); // Вывод текущих данных пользователя

userInfo.setUserInfo({
  name: "Новое имя",
  about: "Новая информация о себе",
});

///class popups

const imagePopup = new PopupWithImage(".popup_type_open-card");
imagePopup.setEventListeners();

const formPopup = new PopupWithForm(".popup_type_form", (data) => {
  userInfo.getUserInfo(data);
  formPopup.close();
});

  const popupAddCard = new PopupWithForm( cardPopup, (data)=>{
    rendererCard(data);
    popupAddCard.close();
  })




//валидация

const cardForm = document.querySelector(".popup__form_type_new-card");
const formProfile = document.querySelector(".popup__form_type_edit");
const formAddValidation = new FormValidator(config, cardForm);
const formEditValidation = new FormValidator(config, formProfile);
formEditValidation.enableValidation();
formAddValidation.enableValidation();

