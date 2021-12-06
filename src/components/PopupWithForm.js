import Popup from "./Popu.js";

export default class PopupWithForm extends Popup{
  constructor(selector, submitProfilePatch){
super(selector);
this.submitProfilePatch = submitProfilePatch;
  }

  _getInputValues() {
    this._inputList = this.selector.querySelectorAll('.popup__field');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setEventListeners() {
    this.selector.addEventListener("click", super._handleCloseButtonAndOverlayClick);
    this.selector.querySelector(".popup__form").addEventListener("submit", submitProfilePatch);
  }

  closePopup() {
    this.selector.classList.remove("popup_opened");
    //Убрать слушатель закрытия модального окна нажатием клавиши Escape
    document.removeEventListener("keydown", this._handleEscClose);
    console.log('close');
  }

}
