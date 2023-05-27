
const openPopup = document.querySelector('.profile__editButton');
const closePopup = document.querySelector('.close-icon');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.add('active');
})

closePopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.remove('active');
})

let nameInput = document.querySelector('.nameinput');
let jobInput = document.querySelector('.jobinput');

let editedName = document.querySelector('.profile__title');
let editedJob = document.querySelector('.profile__subtitle');


function handleFormSubmit (evt) {
    evt.preventDefault(); 

    console.log(nameInput.value);
    console.log(jobInput.value);

    editedName.textContent = nameInput.value; 
    editedJob.textContent = jobInput.value;  
}
popup.addEventListener('submit', handleFormSubmit);