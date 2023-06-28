//popup1
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close-icon");
const profileForm = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const editedName = document.querySelector(".profile__title");
const editedJob = document.querySelector(".profile__subtitle");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
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

function closeEsc(){
  document.querySelectorAll('.popup').forEach(item => {
    item.addEventlistener("keydown", (e) => {
      item.focus()
      if(e.key === 'Escape'){
        console.log(e.key)
        closePopup(item)
      }
  })
})
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
const cardPopup = document.querySelector(".popup_type_new-card");

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

//cards
const initialCards = [
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

const cardForm = document.querySelector(".popup__form_type_new-card");
const buttonSubmitElement = cardForm.querySelector(".popup__buttonAddCard");
const inputTitleElement = cardForm.querySelector(".popup__input_type_title");
const inputLinkElement = cardForm.querySelector(".popup__input_type_link");
const cardListElement = document.querySelector(".cards__list");
const templateElement = document
  .querySelector("#card__template")
  .content.querySelector(".card");

function createCard({ name, link }) {
  const cardElement = templateElement.cloneNode(true);
  const buttonDelElement = cardElement.querySelector(".card__deletebutton");
  const imageElement = cardElement.querySelector(".card__image");
  const textElement = cardElement.querySelector(".card__text");
  const titleElement = textElement.querySelector(".card__title");
  const likeElement = textElement.querySelector(".card__button");
  titleElement.textContent = name;
  imageElement.src = link;
  imageElement.alt = name;

  likeElement.addEventListener("click", () => {
    likeElement.classList.toggle("card__button_active");
  });

  buttonDelElement.addEventListener("click", function () {
    cardElement.remove();
  });

  imageElement.addEventListener("click", function () {
    openPopup(imageForm);
    popupTitle.textContent = titleElement.textContent;
    popupBg.src = imageElement.src;
    popupBg.alt = name;
  });

  return cardElement;
}

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

initialCards.forEach(function (item) {
  renderCard(item, cardListElement, "append");
});

//popup3
const imageForm = document.querySelector(".popup_type_open-card");
const imageFormCloseButton = document.querySelector(
  ".popup__close-icon_type_open-card"
);
const imageContainer = document.querySelector(".popup__image-container");
const popupTitle = imageContainer.querySelector(".popup__image-title");
const popupBg = imageContainer.querySelector(".popup__image");
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
