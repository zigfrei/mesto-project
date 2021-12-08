export default class Popup {
  constructor(selector) {
    this.selector = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseButtonAndOverlayClick =
      this._handleCloseButtonAndOverlayClick.bind(this);
  }

  openPopup() {
    this.selector.classList.add("popup_opened");
    //Слушатель закрытия модального окна нажатием клавиши Escape
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this.selector.classList.remove("popup_opened");
    //Убрать слушатель закрытия модального окна нажатием клавиши Escape
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  _handleCloseButtonAndOverlayClick(event) {
    if (
      event.target.classList.contains("popup__close-button") ||
      event.target.classList.contains("popup")
    ) {
      this.closePopup();
      this.selector.removeEventListener(
        "click",
        this._handleCloseButtonAndOverlayClick
      );
    }
  }

  setEventListeners() {
    this.selector.addEventListener(
      "click",
      this._handleCloseButtonAndOverlayClick
    );
  }
}
