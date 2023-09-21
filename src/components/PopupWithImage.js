import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__image-title");
  }

  open(cardData) {
    this._image.alt = cardData.name;
    this._image.src = cardData.link;
    this._caption.textContent = cardData.name;
    super.open();
  }
}