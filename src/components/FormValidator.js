export default class FormValidator {
  constructor(selectors, elementForm) {
    (this.selectors = selectors), (this.elementForm = elementForm);
  }

  _getElement() {
    const elements = {
      input: this.elementForm.querySelector(this.selectors.inputSelector),
      submitButton: this.elementForm.querySelector(this.selectors.submitButtonSelector),
      inputs: Array.from(
        this.elementForm.querySelectorAll(this.selectors.inputSelector)
      ),
    };
    // console.log(elements.inputs);
    return elements;
  }

  _showInputError(input) {
    const errorElement = this.elementForm.querySelector(`.${input.id}-error`)
    input.classList.add(this.selectors.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this.selectors.errorClass);

  }
  _hideInputError(input) {
    const errorElement = this.elementForm.querySelector(`.${input.id}-error`)
    input.classList.remove(this.selectors.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.elementForm.errorClass);
  }

  _checkInputValidity(input) {
    if (! input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._getElement().inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //Этот функцию надо использовать в index.js.... но пока не получается
  disableSubmitButton() {
    const buttonElement = this.elementForm.querySelector(
      this.selectors.submitButtonSelector
    );
    buttonElement.classList.add(this.selectors.inactiveButtonClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._getElement().submitButton.classList.add(
        this.selectors.inactiveButtonClass
      );
    } else {
      this._getElement().submitButton.classList.remove(
        this.selectors.inactiveButtonClass
      );
    }
  }

  _setEventListeners() {
    const inputList = this._getElement().inputs;
    this._toggleButtonState();
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.elementForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
