//модальное окно редактирования профиля
const popupMain = document.querySelector(".popup_theme_main");
//кнопка редактирования профиля
const editButton = document.querySelector(".profile__edit-button");
//строка профиля имя
const profileTitleName = document.querySelector(".profile__title");
//строка профиля профессиональная деятельность
const profileSubtitleName = document.querySelector(".profile__subtitle");
//строка модального окна Имя
const nameInput = document.querySelector("#author-name");
//строка модального окна профессиональная деятельность
const jobInput = document.querySelector("#profession");
//форма модального окна профиля
const formElement = popupMain.querySelector(".popup__form");

//Функции открытия и закрытия модального окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Редактирование имени и информации о себе
//Функция добавления информации в профиль
const addContentFromInput = (content, input) => {
  content.textContent = input.value;
}

//Функция сохранения после нажатия кнопки
function formSubmitHandler(evt) {
  evt.preventDefault();
  addContentFromInput(profileTitleName, nameInput);
  addContentFromInput(profileSubtitleName, jobInput)
  closePopup(popupMain);
}


export {popupMain, editButton, openPopup, closePopup, profileTitleName, profileSubtitleName, nameInput, jobInput, formElement, addContentFromInput, formSubmitHandler};
