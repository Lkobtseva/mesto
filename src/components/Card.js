export default class Card {
  #data;
  #ownerId;
  #userId;
  #likes;
  #cardElement;
  #templateSelector;
  #handleClickLike
  #handleClickDelete
  #handleClickCard;
  #cardTitle;
  #cardImage;
  #cardLike;
  #cardLikeCounter
  #cardTrash;

  constructor({ data, userId, handleClickLike, handleClickDelete, handleClickCard }, templateSelector) {
    this.#data = data;
    this.#ownerId = data.owner._id;
    this.#userId = userId;
    this.#likes = data.likes;
    this.#templateSelector = templateSelector;
    this.#handleClickLike = handleClickLike;
    this.#handleClickDelete = handleClickDelete;
    this.#handleClickCard = handleClickCard;
  }

  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.card').cloneNode(true)
  }

  #setEventListeners() {
    this.#cardLike.addEventListener('click', () => { this.#handleClickLike(this)});
    this.#cardTrash.addEventListener('click', () => { this.#handleClickDelete(this)});
    this.#cardImage.addEventListener('click', () => { this.#handleClickCard(this.#data)});
  }

  likeCheck() {
    return this.#cardLike.classList.contains('card__button_active');
  }

  likeCard(counter) {
    this.#likes = this.#data.likes;
    this.#cardLike.classList.toggle('card__button_active');
    this.#cardLikeCounter.textContent = counter;
  }

  showActiveLikes() {
    this.#likes.forEach((like) => {
      if (like._id === this.#userId) {
        this.#cardLike.classList.add('card__button_active');
      }
    });
  }

  showTrash() {
    if (!(this.#ownerId === this.#userId)) {
      this.#cardTrash.remove();
    }
  }

  deleteCard() {
    this.#cardElement.remove();
    this.#cardElement = null;
  }

  getCardId() {
    return this.#data._id;
  }

  getCardsData() {
    const { name, _id, link } = this.#data;
    return { name, _id, link };
  }

  createCardElement() {
    this.#cardElement = this.#getTemplate();
    this.#cardTitle = this.#cardElement.querySelector('.card__title');
    this.#cardImage = this.#cardElement.querySelector('.card__image');
    this.#cardLike = this.#cardElement.querySelector('.card__button');
    this.#cardLikeCounter = this.#cardElement.querySelector('.card__like-number');
    this.#cardTrash = this.#cardElement.querySelector('.card__deletebutton');
    this.#cardTitle.textContent = this.#data.name;
    this.#cardImage.src = this.#data.link;
    this.#cardImage.alt = this.#data.name;
    this.#cardLikeCounter.textContent = this.#likes.length;
    this.showActiveLikes();
    this.showTrash();
    this.#setEventListeners();

    return this.#cardElement;
  };
}