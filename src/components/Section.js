export default class Section {
  #renderer;
  #containerParentElement;

  constructor(renderer, containerSelector) {
    this.#renderer = renderer;
    this.#containerParentElement = document.querySelector(containerSelector);
  }

  setItem(elementNode, position) {
    switch (position) {
      case "append":
        this.#containerParentElement.append(elementNode);
        break;
      case "prepend":
        this.#containerParentElement.prepend(elementNode);
        break;
      default:
        break;
    }
  }

  renderItems(items) {
    items.forEach(item => this.#renderer({ data: item, position: 'append' }));
  }
}