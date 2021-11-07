
import {popupMain, editButton, openPopup, closePopup, profileTitleName, profileSubtitleName, nameInput, jobInput, formElement, formSubmitHandler} from '../components/modal.js';
import {cardsContainer, createCard, popupImgOpen, addCard, initialCards, addCardButton, popupAddcard, formCardElement, formSubmitCard} from '../components/card.js';
import {escHandler} from '../components/utils.js';

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  openPopup(popupMain);
});

//Слушатель выхода из редактора профиля
popupMain.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupMain);
  }
});


//Значение полей имя и деятельность передается в модальную форму профиля
nameInput.value = profileTitleName.textContent;
jobInput.value = profileSubtitleName.textContent;

//Слушатель сохранения изменений по нажатию кнопки в модальном окне
formElement.addEventListener("submit", formSubmitHandler);

//Инициализация набора карточек по заводу
initialCards.forEach((element) => {
  addCard(cardsContainer, createCard(element.name, element.link));
});

//Слушатель нажатия на кнопку добавить карточку
addCardButton.addEventListener("click", () => {
  openPopup(popupAddcard);
});

//Слушатель закрытия модального окна при нажатии на кнопку или вне поля модального окна
popupAddcard.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupAddcard);
  }
});

//Слушатель добавления карточки по нажатию кнопки в модальном окне
formCardElement.addEventListener("submit", formSubmitCard);

//Слушатель закрытия модального окна картинки при нажатии на кнопку или вне поля модального окна
popupImgOpen.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupImgOpen);
  }
});

//Слушатель закрытия модального окна нажатием клавиши Escape
document.addEventListener('keydown', escHandler);

