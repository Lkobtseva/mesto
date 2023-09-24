import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupFormButton = this._popupForm.querySelector('.popup__button');
        this._hhandleSubmitForm = handleSubmitForm;
        this._submitBtnText = this._popupFormButton.textContent
    }
    
    renderLoading(isLoading, loadingText='Удаление...') {
        if (isLoading) {
          this._popupFormButton.textContent = loadingText;
        } else {
          this._popupFormButton.textContent = this._submitBtnText;
        }
      } 

    submit(sub) {
        this._handleSubmitForm = sub;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm();
        });
    }
}