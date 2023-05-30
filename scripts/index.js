
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.close-icon');
const popup = document.querySelector('.popup');
let nameInput = document.querySelector('.nameinput');
let jobInput = document.querySelector('.jobinput');

let editedName = document.querySelector('.profile__title');
let editedJob = document.querySelector('.profile__subtitle');

openPopup.addEventListener('click', function (e) {
    popup.classList.add("popup__opened");
    nameInput.value = editedName.textContent;
    jobInput.value = editedJob.textContent;
})

closePopup.addEventListener('click', function (e) {
    popup.classList.remove("popup__opened");
})


function handleFormSubmit(evt) {
    evt.preventDefault();

    console.log(nameInput.value);
    console.log(jobInput.value);

    editedName.textContent = nameInput.value;
    editedJob.textContent = jobInput.value;
    
}
popup.addEventListener('submit', handleFormSubmit);