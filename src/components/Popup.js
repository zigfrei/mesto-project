

export default class Popup {
constructor(selector){
this.selector = selector;
this._handleEscClose = this._handleEscClose.bind(this);
this._handleCloseButtonAndOverlayClick = this._handleCloseButtonAndOverlayClick.bind(this);
}

openPopup() {
  this.selector.classList.add("popup_opened");
  //Слушатель закрытия модального окна нажатием клавиши Escape
  document.addEventListener("keydown", this._handleEscClose);
  console.log('open');
}

closePopup() {
  this.selector.classList.remove("popup_opened");
  //Убрать слушатель закрытия модального окна нажатием клавиши Escape
  document.removeEventListener("keydown", this._handleEscClose);
  console.log('close');
}

_handleEscClose(event) {
  if (event.key === "Escape") {
    console.log('esc');
    this.closePopup();
  }
}

_handleCloseButtonAndOverlayClick(event) {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    console.log('event');
    this.closePopup();
    this.selector.removeEventListener("click", this._handleCloseButtonAndOverlayClick);
  }
}

setEventListeners() {
  this.selector.addEventListener("click", this._handleCloseButtonAndOverlayClick);
}

}

// //Функция закрытия модального окна при нажатии клавиши ESC
// function escHandler(event) {
//   if (event.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// //Функции открытия и закрытия модального окна
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   //Слушатель закрытия модального окна нажатием клавиши Escape
//   document.addEventListener("keydown", escHandler);
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   //Убрать слушатель закрытия модального окна нажатием клавиши Escape
//   document.removeEventListener("keydown", escHandler);
// }

// export {
//   openPopup,
//   closePopup,
// };
