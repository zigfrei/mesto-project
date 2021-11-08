
const showInputError = (formElement, inputElement, errorMessage, theObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(theObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(theObject.errorClass);
};

const hideInputError = (formElement, inputElement, theObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(theObject.inputErrorClass);
  errorElement.classList.remove(theObject.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, theObject) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, theObject);
  } else {
    hideInputError(formElement, inputElement, theObject);
  }
};

const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
  }
);};

const toggleButtonState = (inputList, buttonElement, theObject) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(theObject.inactiveButtonClass);
  } else {
     buttonElement.classList.remove(theObject.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, formInput, formSubmit, theObject) => {
  const inputList = Array.from(formElement.querySelectorAll(formInput));
  const buttonElement = formElement.querySelector(formSubmit);
  toggleButtonState(inputList, buttonElement, theObject);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, theObject);
      toggleButtonState(inputList, buttonElement, theObject);
    });
  });
};

const enableValidation = (theObject) =>{
  const formList = Array.from(document.querySelectorAll(theObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
      setEventListeners(formElement, theObject.inputSelector, theObject.submitButtonSelector, theObject);


  });

  // theObject.formSelector
  // theObject.inputSelector
  // theObject.submitButtonSelector
  // theObject.inactiveButtonClass
  // theObject.inputErrorClass
  // theObject.errorClass
};

export {enableValidation};
