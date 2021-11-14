import "./pages/index.css";
import {
  popupMain,
  editButton,
  openPopup,
  closePopup,
  profileTitleName,
  profileSubtitleName,
  nameInput,
  jobInput,
  profileFormElement,
  addContentFromProfile,
  submitProfilePatch,
  popupAvatar,
  addAvatarButton,
  addAvatarForm,
  renderLoading,
} from "./components/modal.js";
import {
  popupImgOpen,
  addCardButton,
  popupAddCard,
  formCardElement,
  addCardFromPopup,
} from "./components/card.js";
import { handleCloseButtonAndOverlayClick } from "./components/utils.js";
import {
  enableValidation,
  disableSubmitButton,
} from "./components/validate.js";
import {
  config,
  getInitialCards,
  getUserProfile,
  patchAvatar,
} from "./components/api.js";

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  addContentFromProfile(profileTitleName, nameInput);
  addContentFromProfile(profileSubtitleName, jobInput);
  openPopup(popupMain);
});

//слушатель нажатия на кнопку добавления аватара
addAvatarButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

//Слушатель закрытия модалього окна добавления аватара
popupAvatar.addEventListener("click", (event) => {
  handleCloseButtonAndOverlayClick(event, popupAvatar);
});

//Слушатель добавления нового аватара по нажатию кнопки в модальном окне
addAvatarForm.addEventListener("submit", (event) => {
  renderLoading(true, popupAvatar);
  patchAvatar();
  closePopup(popupAvatar);
  disableSubmitButton(addAvatarForm);
});

//Слушатель выхода из редактора профиля
popupMain.addEventListener("click", (event) => {
  handleCloseButtonAndOverlayClick(event, popupMain);
});

//Слушатель сохранения изменений в профиле по нажатию кнопки в модальном окне
profileFormElement.addEventListener("submit", submitProfilePatch);

//Слушатель нажатия на кнопку для открытия модального окна "добавить карточку"
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//Слушатель закрытия модального окна при нажатии на кнопку или вне поля модального окна
popupAddCard.addEventListener("click", (event) => {
  handleCloseButtonAndOverlayClick(event, popupAddCard);
});

//Слушатель добавления карточки по нажатию кнопки в модальном окне
formCardElement.addEventListener("submit", (event) => {
  addCardFromPopup(event);
  disableSubmitButton(formCardElement);
});

//Слушатель закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
popupImgOpen.addEventListener("click", (event) => {
  handleCloseButtonAndOverlayClick(event, popupImgOpen);
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
});

getInitialCards();
getUserProfile();
