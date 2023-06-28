function showError(inputElement, errorElement, config) {
    inputElement.classList.add("popup__input_invalid");
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove("popup__input_invalid");
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function chekInputValidity(inputElement, formElement, config) {
    /*inputElement.setCustomValidity("");*/
  
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  
    if (!isInputValid) {
      showError(inputElement, errorElement, config);
    } else {
      hideError(inputElement, errorElement, config);
    }
  }
  
  function disabledButton(buttonElement, config) {
    buttonElement.disabled = "disabled";
    buttonElement.classList.add(config.inactiveButtonClass);
  }
  
  function enabledButton(buttonElement, config) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
  
  function toggleButtonState(buttonElement, isActive, config) {
    if (!isActive) {
      disabledButton(buttonElement, config);
    } else {
      enabledButton(buttonElement, config);
    }
  }
  
  function setEventListener(formElement, config) {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(
      config.submitButtonSelector
    );
  
    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
  
    [...inputList].forEach(function (inputElement) {
      inputElement.addEventListener("input", function () {
        toggleButtonState(
          submitButtonElement,
          formElement.checkValidity(),
          config
        );
        formElement.addEventListener('invalid', function (evt) {
            evt.preventDefault();
            const inputElement = evt.target;
            const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
            showError(inputElement, errorElement, config);
          });
        chekInputValidity(inputElement, formElement, config);
      });
    });
  
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!formElement.checkValidity()) return;
  
      console.log("Форма отправлена!");
    });
  }
  
  function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);
  
    [...formsList].forEach(function (formElement) {
      setEventListener(formElement, config);
    });
  }
  
  const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__input_invalid",
    errorElement: ".error"
  };
  
  enableValidation(config);
