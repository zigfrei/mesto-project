import { closePopup } from "../components/modal.js";
//Функция закрытия модального окна при нажатии клавиши ESC
function escHandler(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
//Функция закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
function handleCloseButtonAndOverlayClick(event, popup) {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popup);
  }
}
export { escHandler, handleCloseButtonAndOverlayClick };
