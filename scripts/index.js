//popup1
const openPopup = document.querySelector(".profile__edit-button");
const closePopup = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup_type_edit");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let editedName = document.querySelector(".profile__title");
let editedJob = document.querySelector(".profile__subtitle");

openPopup.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  nameInput.value = editedName.textContent;
  jobInput.value = editedJob.textContent;
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function handleFormSubmitpopup(evt) {
  evt.preventDefault();

  console.log(nameInput.value);
  console.log(jobInput.value);
  editedName.textContent = nameInput.value;
  editedJob.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}
popup.addEventListener("submit", handleFormSubmitpopup);

//popup2
const openPopupCard = document.querySelector(".profile__button");
const closePopupCard = document.querySelector(".close-icon_type_new-card");
const popupCard = document.querySelector(".popup_type_new-card");

openPopupCard.addEventListener("click", function () {
  popupCard.classList.add("popup_opened");
  inputTitleElement.value = "";
  inputLinkElement.value = "";
});

closePopupCard.addEventListener("click", function () {
  popupCard.classList.remove("popup_opened");
});

function handleFormSubmit(evt) {
  evt.preventDefault();

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

  formElement.reset();
  popupCard.classList.remove("popup_opened");
}

popupCard.addEventListener("submit", handleFormSubmit);







//cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const formElement = document.querySelector(".popupform_type_new-card");
const buttonSubmitElement = formElement.querySelector(".popup__buttonAddCard");
const inputTitleElement = formElement.querySelector(".popup__input_type_title");
const inputLinkElement = formElement.querySelector(".popup__input_type_link");
const cardListElement = document.querySelector(".cards__list");
const templateElement = document.querySelector("#card__template").content.querySelector(".card");

function handleSubmitAdd(e) {
  e.preventDefault();
  renderCard(
    inputTitleElement.value,
    inputLinkElement.value,
    cardListElement, "prepend"
  );
}

formElement.addEventListener("submit", handleSubmitAdd);

function createCard({ name, link }) {
  const cardElement = templateElement.cloneNode(true);
  const buttonDelElement = cardElement.querySelector(".card__deletebutton");
  const imageElement = cardElement.querySelector(".card__image");
  const textElement = cardElement.querySelector(".card__text");
  const titleElement = textElement.querySelector(".card__title");
  const likeElement = textElement.querySelector(".card__button");
  titleElement.textContent = name;
  imageElement.src = link;


  function handleSubmitEdit(e) {
    e.preventDefault();
    titleElement.textContent = inputTitleElement.value;
    imageElement.src = inputLinkElement.value;
    formElement.reset();
    buttonSubmitElement.textContent = "Добавить";
    formElement.addEventListener("submit", handleSubmitAdd);
    formElement.removeEventListener("submit", handleSubmitEdit);
  }


  likeElement.addEventListener("click", function addOrRemoveLike() {
    if (likeElement.classList.contains("card__button_active")) {
      likeElement.classList.remove("card__button_active");
    } else {
      likeElement.classList.add("card__button_active");
    }
  });

  buttonDelElement.addEventListener("click", function () {
    cardElement.remove();
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
const popupImage = document.querySelector(".popup_type_open-card");
const openPopupImages = document.querySelectorAll(".card__image");
const closePopupImage = document.querySelector(".close-icon_type_open-card");
const ImageContainer = document.querySelector(".popup__image-container");
const popupTitle = ImageContainer.querySelector(".popup__image-title");
const popupBg = ImageContainer.querySelector(".popup__image");
const titleElement = document.querySelector(".card__title");
const imageElement = document.querySelector(".card__image");
const cardList = document.querySelector('.cards__list');

cardList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("card__image")) {
    const card = target.closest(".card");
    const titleElement = card.querySelector(".card__title");
    const imageElement = card.querySelector(".card__image");
    popupImage.classList.add("popup_opened");
    popupTitle.textContent = titleElement.textContent;
    popupBg.src = imageElement.src;
  }
});



function addPopupImage() {
  openPopupImages.forEach(function (image) {
    image.addEventListener("click", function () {
      popupImage.classList.add("popup_opened");
      titleElement.value = popupTitle.textContent;
      imageElement.src = popupBg.src;
    });
  });
}

closePopupImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});