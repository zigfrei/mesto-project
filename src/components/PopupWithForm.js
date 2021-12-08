import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selector, callbackSubmitForm){
super(selector);
this.callbackSubmitForm = callbackSubmitForm;
this._popupForm = this.selector.querySelector(".popup__form");
// this. _funList =this. _funList.bind(this);

  }

  _getInputValues() {
    this._inputList = this.selector.querySelectorAll('.popup__field');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  _funList(ev){
ev.preventDefault();
this.callbackSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {this._funList(e)}
      // e.preventDefault();
      // this.callbackSubmitForm(this._getInputValues());
      // this.removeEventListener("submit", () =>{callbackSubmitForm()});}
    );

  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
    // this._popupForm.removeEventListener("submit", (e) => {this._funList(e)});
    console.log('close popup with form');
  }

}
