import { closePopup } from "./modal.js";
//Функция закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
function handleCloseButtonAndOverlayClick(event, popup) {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popup);
  }
}
export { handleCloseButtonAndOverlayClick };
