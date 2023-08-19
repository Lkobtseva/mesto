export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    setItem(element) {
      this._container.append(element);
    }
  
    clear() {
      this._container.innerHTML = "";
    }
  
    renderItems() {
      this.clear();
      this._items.forEach((item) => {
        const cardElement = this._renderer(item); 
  
        this.setItem(cardElement);
      });
    }
  }




