export default class Section {
  #renderer;
  #containerElement;

  constructor(renderer, containerSelector) {
    this.#renderer = renderer;
    this.#containerElement = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => this.#renderer({ data: item, position: 'append' }));
  }
  setItem(elementNode, position) {
    switch (position) {
      case "append":
        this.#containerElement.append(elementNode);
        break;
      case "prepend":
        this.#containerElement.prepend(elementNode);
        break;
      default:
        break;
    }
  }
}