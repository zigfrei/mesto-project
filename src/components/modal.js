
//Функция закрытия модального окна при нажатии клавиши ESC
function escHandler(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Функции открытия и закрытия модального окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
  //Слушатель закрытия модального окна нажатием клавиши Escape
  document.addEventListener("keydown", escHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  //Убрать слушатель закрытия модального окна нажатием клавиши Escape
  document.removeEventListener("keydown", escHandler);
}

export {
  openPopup,
  closePopup,
};
