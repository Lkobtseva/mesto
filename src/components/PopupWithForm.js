import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleSubmitForm}) {
    super(popupSelector);
    this._formElement = document.querySelector(".popup__form");
    this._handleSubmitForm = handleSubmitForm ;
    this._inputs = Array.from(this._formElement.querySelectorAll(".popup__input"))
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm = this._getInputValues();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}

