import "./pages/index.css";
import {
  popupMain,
  editButton,
  openPopup,
  profileTitleName,
  profileSubtitleName,
  nameInput,
  jobInput,
  profileFormElement,
  saveProfileFormInput,
  addContentFromProfile,
} from "./components/modal.js";
import {
  cardsContainer,
  createCard,
  popupImgOpen,
  addCard,
  initialCards,
  addCardButton,
  popupAddCard,
  formCardElement,
  addCardFromPopup,
} from "./components/card.js";
import { closeButtonHandler } from "./components/utils.js";
import { enableValidation } from "./components/validate.js";

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  addContentFromProfile(profileTitleName, nameInput);
  addContentFromProfile(profileSubtitleName, jobInput);
  openPopup(popupMain);
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__field-error_active",
  });
});

//Слушатель выхода из редактора профиля
popupMain.addEventListener("click", (event) => {
  closeButtonHandler(event, popupMain);
});

//Слушатель сохранения изменений по нажатию кнопки в модальном окне
profileFormElement.addEventListener("submit", saveProfileFormInput);

//Инициализация набора карточек по заводу
initialCards.forEach((element) => {
  addCard(cardsContainer, createCard(element.name, element.link));
});

//Слушатель нажатия на кнопку добавить карточку
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__field-error_active",
  });
});

//Слушатель закрытия модального окна при нажатии на кнопку или вне поля модального окна
popupAddCard.addEventListener("click", (event) => {
  closeButtonHandler(event, popupAddCard);
});

//Слушатель добавления карточки по нажатию кнопки в модальном окне
formCardElement.addEventListener("submit", addCardFromPopup);

//Слушатель закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
popupImgOpen.addEventListener("click", (event) => {
  closeButtonHandler(event, popupImgOpen);
});

