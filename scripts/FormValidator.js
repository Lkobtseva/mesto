 const config = {
    formElement: ".popup__form",
    inputElement: ".popup__input",
    submitButtonElement: ".popup__button",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "popup__input_invalid",
    errorElement: ".error"
  };

export default class FormValidator {
    constructor(config) {
      this._config = config;
    }

  
    _showError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add('popup__input-error_active');
        }
        
        _hideError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove('popup__input-error_active');
        }
  
    _checkInputValidity(inputElement) {
      const isInputValid = inputElement.validity.valid;
      if (!isInputValid) {
        this._showError(inputElement, inputElement.validationMessage);
      } else {
        this._hideError(inputElement);
      }
    }
  
    _disableButton(buttonElement) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    }
  
    _enableButton(buttonElement) {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  
    _toggleButtonState(buttonElement, isActive) {
      if (!isActive) {
        this._disableButton(buttonElement);
      } else {
        this._enableButton(buttonElement);
      }
    }
  
    _setEventListeners(formElement) {
      const inputList = formElement.querySelectorAll(this._config.inputElement);
      const submitButtonElement = formElement.querySelector(this._config.submitButtonElement);
  
      this._toggleButtonState(submitButtonElement, formElement.checkValidity());
  
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._toggleButtonState(submitButtonElement, formElement.checkValidity());
          this._checkInputValidity(inputElement);
        });
      });
    }
  
    enableValidation() {
      const formsList = document.querySelectorAll(this._config.formElement);
      formsList.forEach((formElement) => {
        formElement.noValidate = true;
        this._setEventListeners(formElement);
      });
    }
  }
  
 
  
  const formValidator = new FormValidator(config);
  formValidator.enableValidation();