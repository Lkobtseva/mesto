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

function handleFormSubmitpopup (evt) {
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
  inputTitleElement.value = titleElement.textContent;
  inputLinkElement.value = imageElement.textContent;
});

closePopupCard.addEventListener("click", function () {
  popupCard.classList.remove("popup_opened");
});

function handleFormSubmit(evt) {
  evt.preventDefault();

  console.log(inputTitleElement.value);
  console.log(inputLinkElement.value);

  titleElement.textContent = inputTitleElement.value;
  imageElement.src = inputLinkElement.value;
  popupCard.classList.remove("popup_opened");
}
popupCard.addEventListener("submit", handleFormSubmit);

//popup3
/*const openPopupImage = document.querySelector(".card__image");
const closePopupImage = document.querySelector(".close-icon_type_open-card");
const popupImage = document.querySelector(".popup_type_open-card");
let popupTitle = document.querySelector(".popup__image-title");
let popupBg = document.querySelector(".popup__image");

openPopupImage.addEventListener("click", function () {
  popupImage.classList.add("popup_image-opened");
  titleElement.value = popupTitle.textContent;
  imageElement.value = popupBg.textContent;
});

closePopupImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_image-opened");
});*/

//cards

const initialCards = [
  {
    name: "Sunset",
    link: "https://unsplash.com/photos/1z4yWg9lQlg",
  },
  {
    name: "Library",
    link: "https://unsplash.com/photos/Oaqk7qqNh_c",
  },
  {
    name: "Golden hour",
    link: "https://unsplash.com/photos/YBMZqq7GAjk",
  },
  {
    name: "Picnic",
    link: " ",
  },
  {
    name: "Daisy wheels",
    link: "https://unsplash.com/photos/AVi4lkHl5L4",
  },
  {
    name: "Books",
    link: "https://unsplash.com/photos/WUSp1l7_rQc",
  },
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

function createCard({name, link}) {
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

  likeElement.addEventListener("click", function addLike () {
    likeElement.classList.add("card__button_active");  
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

/*function createCard(name, link) {
  const template = document.querySelector("#card");
  const card = template.content.cloneNode(true);
  const image = card.querySelector(".card__image");
  const title = card.querySelector(".card__title");
  const button = card.querySelector(".card__button");

  image.src = link;
  title.textContent = name;
  
  function addLike() {}
  button.addEventListener("click", addLike);
  /*likebutton*/
/* return card;
}

function renderCards() {
  const cardsSection = document.querySelector(".cards");

  initialCards.forEach((cardData) => {
    const card = createCard(cardData.name, cardData.link);
    cardsSection.appendChild(card);
  });
}

renderCards();*/
