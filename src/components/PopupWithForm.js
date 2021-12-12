import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, callbackSubmitForm) {
    super(selector);
    this.callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this.popupElement.querySelector(".popup__form");
    this._handelSubmitForm = this._handelSubmitForm.bind(this);
  }

  //Достать все значения input из формы
  _getInputValues() {
    this._inputList = this.popupElement.querySelectorAll(".popup__field");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  //функция обработчик сабмита формы
  _handelSubmitForm(e) {
    e.preventDefault();
    this.callbackSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handelSubmitForm);
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
