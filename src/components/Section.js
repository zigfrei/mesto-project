export default class Section {
  constructor({ items, renderer }, selector) {
    this.items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach((item) => this._renderer(item));
  }

  prependItem(item) {
    this._renderer(item);
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
