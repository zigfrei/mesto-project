import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selector){
super(selector);
}

openPopup(cardImage, cardTitle) {
  super.openPopup();
  this.imgPopupContainer = this.popupElement.querySelector(".popup__img");
  this.imgPopupContainer.src = cardImage;
  this.imgPopupContainer.alt = cardTitle;
  this.popupElement.querySelector(".popup__caption").textContent = cardTitle;
}

}
