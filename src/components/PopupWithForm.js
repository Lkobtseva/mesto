import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._formElement = document.querySelector(".popup__form");
    this._handleSubmitForm = handleSubmitForm ;
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

