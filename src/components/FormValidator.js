import { config } from "../utils/constants.js";

export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = formElement.querySelectorAll(this._config.inputElement);
    this.submitButtonElement = formElement.querySelector(
      this._config.submitButtonElement
    );
  }

  _showError(errorMessage) {
    const errorElement = document.querySelector(
      `#${this._inputElement.name}-error`
    );
    this._inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorActive);
  }

  _hideError() {
    const errorElement = document.querySelector(
      `#${this._inputElement.name}-error`
    );
    this._inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorActive);
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
    this.submitButtonElement.classList.add(this._config.inactiveButtonClass);
  }

  enableButton() {
    this.submitButtonElement.disabled = false;
    this.submitButtonElement.classList.remove(this._config.inactiveButtonClass);
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
