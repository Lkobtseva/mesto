import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #buttonText;
  constructor(popupSelector, handleSubmitForm, buttonText) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._formElement.querySelectorAll(".popup__input"))
    this._popupFormButton = this._formElement.querySelector('.popup__button');
    this._handleSubmitForm = handleSubmitForm;
    this.#buttonText = buttonText;
  }

  getInputValues() {
    const formValues = {};
    this._inputs.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  loading(isLoading) {
    if (isLoading) {
      this._popupFormButton.textContent = 'Загрузка...';
    } else {
      this._popupFormButton.textContent = `${this.#buttonText}`
    }
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