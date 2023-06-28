// Получаем элементы формы и кнопку сохранения
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popupinput_type_name');
const aboutInput = document.querySelector('.popupinput_type_about');
const saveButton = document.querySelector('.popup__button');

// Функция проверки длины значения поля
const checkLengthValidity = (inputElement, minLength, maxLength) => {
  const value = inputElement.value.trim();
  const length = value.length;
  return length >= minLength && length <= maxLength;
};

// Функция обновления состояния кнопки сохранения
const updateSaveButtonState = () => {
  const isNameValid = checkLengthValidity(inputName, 2, 40);
  const isAboutValid = checkLengthValidity(aboutInput, 2, 200);
  saveButton.disabled = !(isNameValid && isAboutValid);
};

// Функция обработки события изменения значения поля
const handleInputChange = () => {
  updateSaveButtonState();

  if (inputName.validity.valid) {
    document.getElementById('name-error').textContent = '';
  } else if (inputName.validity.valueMissing) {
    document.getElementById('name-error').textContent = 'Необходимо заполнить данное поле';
  } else if (inputName.validity.tooShort || inputName.validity.tooLong) {
    document.getElementById('name-error').textContent = 'Минимальное количество символов: 2. Длина текста сейчас: ' + nameInput.value.length + ' символ.';
  }

  if (aboutInput.validity.valid) {
    document.getElementById('about-error').textContent = '';
  } else if (aboutInput.validity.valueMissing) {
    document.getElementById('about-error').textContent = 'Необходимо заполнить данное поле';
  } else if (aboutInput.validity.tooShort || aboutInput.validity.tooLong) {
    document.getElementById('about-error').textContent = 'Минимальное количество символов: 2. Длина текста сейчас: ' + aboutInput.value.length + ' символ.';
  }
};

// Добавляем обработчик события изменения значения поля
inputName.addEventListener('input', handleInputChange);
aboutInput.addEventListener('input', handleInputChange);

// Добавляем обработчик события отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Дополнительная логика при отправке формы
});