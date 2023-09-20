import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #buttonText;
  constructor(popupSelector, handleSubmitForm ,buttonText) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._popupFormButton = this._formElement.querySelector('.popup__button');
    this._handleSubmitForm = handleSubmitForm ;
    this.#buttonText = buttonText;
    this._inputs = Array.from(this._formElement.querySelectorAll(".popup__input"))
  }

  getInputValues() {
   this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  loading(isLoading) {
    (isLoading)
    ? this._popupFormButton.textContent = 'Загрузка...'
    : this._popupFormButton.textContent = `${this.#buttonText}`
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this.getInputValues());
      this.close();
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}