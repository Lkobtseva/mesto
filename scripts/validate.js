const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__input_invalid",
  errorElement: ".error",
  errorActive: "error_active",
};
enableValidation(config);

function enableValidation(config) {
  const formsList = document.querySelectorAll(config.formSelector);

  formsList.forEach(function (formElement) {
    setEventListener(formElement, config);
  });
}

function showError(inputElement, errorMessage, config) {
  inputElement.classList.add(config.inputErrorClass);
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorActive);
}

function hideError(inputElement, config) {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorActive);
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  if (!isInputValid) {
    showError(inputElement, inputElement.validationMessage, config);
  } else {
    hideError(inputElement, config);
  }
}

function disableButton(buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

function enableButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
}

function setEventListener(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(
    config.submitButtonSelector
  );

  toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      toggleButtonState(
        submitButtonElement,
        formElement.checkValidity(),
        config
      );
      checkInputValidity(inputElement, formElement, config);
    });
  });
}

enableValidation(config);

