import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selector){
super(selector);
}

openPopup(cardImage, cardTitle) {
  this.selector.classList.add("popup_opened");
  const imgPopupContainer = this.selector.querySelector(".popup__img");
  imgPopupContainer.src = cardImage;
  imgPopupContainer.alt = cardTitle;
  this.selector.querySelector(".popup__caption").textContent = cardTitle;
  //Слушатель закрытия модального окна нажатием клавиши Escape
  document.addEventListener("keydown", this._handleEscClose);
  console.log('open');
}

}
