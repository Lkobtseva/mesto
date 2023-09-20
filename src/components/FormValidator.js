import { configValidator } from "../utils/constants.js";

export default class FormValidator {
  constructor(configValidator, formElement) {
    this._configValidator = configValidator;
    this._formElement = formElement;
    this._inputList = formElement.querySelectorAll(this._configValidator.inputElement);
    this.submitButtonElement = formElement.querySelector(
      this._configValidator.submitButtonElement
    );
  }

  _showError(errorMessage) {
    const errorElement = document.querySelector(
      `#${this._inputElement.name}-error`
    );
    this._inputElement.classList.add(this._configValidator.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._configValidator.errorActive);
  }

  _hideError() {
    const errorElement = document.querySelector(
      `#${this._inputElement.name}-error`
    );
    this._inputElement.classList.remove(this._configValidator.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._configValidator.errorActive);
  }

  _checkInputValidity() {
    const isInputValid = this._inputElement.validity.valid;
    if (!isInputValid) {
      this._showError(this._inputElement.validationMessage);
    } else {
      this._hideError();
    }
  }

  disableButton() {
    this.submitButtonElement.disabled = "disabled";
    this.submitButtonElement.classList.add(this._configValidator.inactiveButtonClass);
  }

  enableButton() {
    this.submitButtonElement.disabled = false;
    this.submitButtonElement.classList.remove(this._configValidator.inactiveButtonClass);
  }

  _toggleButtonState(isActive) {
    if (!isActive) {
      this.disableButton(this.submitButtonElement);
    } else {
      this.enableButton(this.submitButtonElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._formElement.checkValidity());
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputElement = inputElement;
        this._toggleButtonState(this._formElement.checkValidity());
        this._checkInputValidity(inputElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}