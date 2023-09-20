import { Popup } from "./Popup";


export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupFormButton = this._popupForm.querySelector('.popup__save-button');
    this._setEventListeners();
  }

  loading(isLoading) {
    this._popupFormButton.textContent = isLoading ? 'Удаление...' : 'Да';
  }

  setSubmitAction(submitHandler) {
    this._submitHandler = submitHandler;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (this._submitHandler) {
        this._submitHandler();
      }
    });
  }
}