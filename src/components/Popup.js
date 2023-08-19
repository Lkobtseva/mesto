export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  
    setEventListeners() {
      const overlay = this._popup.querySelector(".popup");
      overlay.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup")) {
          this.close();
        }
      });
  
      const closeButton = this._popup.querySelector(".popup__close-icon");
      closeButton.addEventListener("click", () => {
        this.close();
      });
      
      this._form = this._popup.querySelector(".popup__form");
      if (this._form) {
        this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this.handleFormSubmit();
        });
      }
    }
  }