import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selector){
super(selector);
}

openPopup(cardImage, cardTitle) {
  super.openPopup();
  this.imgPopupContainer = this.selector.querySelector(".popup__img");
  this.imgPopupContainer.src = cardImage;
  this.imgPopupContainer.alt = cardTitle;
  this.selector.querySelector(".popup__caption").textContent = cardTitle;
}

}
