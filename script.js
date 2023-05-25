
const openPopup = document.querySelector('profile__editButton');
const closePopup = document.querySelector('close-icon');
const popup = document.querySelector('popup');

openPopup.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.add('active');
})

closePopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.remove('active');
})








/*let formElement = document.querySelector('.popup');//весь попап
let popupform = document.querySelector('.popup__form'); // Форма 
let closePopupButton = document.querySelector('.close-icon'); // Кнопка для скрытия окна
let openButton = document.querySelector('.profile__editButton');//кнопка для открытия окна
// Находим поля формы в DOM
let nameInput = document.querySelector('.label__name');
let jobInput = document.querySelector('.label__job');

let editedName = document.querySelector('.profile__title');//Имя профиля
let aditedJob = document.querySelector('.profile__subtitle');//Работа в профиле


if (openButton.addEventListener('click', )) {
        formElement.classList.add('active'); // Добавляем класс 'active' для фона
        popupform.classList.add('active'); // И для самого окна
    }



closePopupButton.addEventListener('click',() => { 
    formElement.classList.remove('active'); 
    popupform.classList.remove('active');
});













// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    console.log(nameInput.value);
    console.log(jobInput.value);

    // Выберите элементы, куда должны быть вставлены значения полей
    console.log(editedName);
    console.log(editedJob);
    // Вставьте новые значения с помощью textContent
    console.log(editedName.textContent);
    editedName.textContent = nameInput; 
    console.log(editedJob.textContent);
    editedJob.textContent = nameInput; 
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);*/