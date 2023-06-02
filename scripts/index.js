
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

let editedName = document.querySelector('.profile__title');
let editedJob = document.querySelector('.profile__subtitle');

openPopup.addEventListener('click', function () {
    popup.classList.add("popup_opened");
    nameInput.value = editedName.textContent;
    jobInput.value = editedJob.textContent;
})

closePopup.addEventListener('click', function () {
    popup.classList.remove("popup_opened");
})


function handleFormSubmit(evt) {
    evt.preventDefault();

    console.log(nameInput.value);
    console.log(jobInput.value);

    editedName.textContent = nameInput.value;
    editedJob.textContent = jobInput.value;
    popup.classList.remove("popup_opened");
}
popup.addEventListener('submit', handleFormSubmit);