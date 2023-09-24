import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._formElement.querySelectorAll(".popup__input"))
    this._popupFormButton = this._formElement.querySelector('.popup__button');
    this._handleSubmitForm = handleSubmitForm;
    this._submitBtnText = this._popupFormButton.textContent
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

  renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._popupFormButton.textContent = loadingText;
    } else {
      this._popupFormButton.textContent = this._submitBtnText;
    }
  } 

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this.getInputValues());
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}