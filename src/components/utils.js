import { closePopup } from "../components/modal.js";
//Функция закрытия модального окна при нажатии клавиши ESC
function escHandler(event) {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}
//Функция закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
function closeButtonHandler(event, popup) {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popup);
  }
}
export { escHandler, closeButtonHandler };
