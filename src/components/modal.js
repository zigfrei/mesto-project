import { escHandler } from "../components/utils.js";
//модальное окно редактирования профиля
const popupMain = document.querySelector(".popup_theme_main");
//кнопка редактирования профиля
const editButton = document.querySelector(".profile__edit-button");
//строка профиля имя
const profileTitleName = document.querySelector(".profile__title");
//строка профиля профессиональная деятельность
const profileSubtitleName = document.querySelector(".profile__subtitle");
//аватар профиля
const profileAvatar = document.querySelector(".profile__avatar");
//строка модального окна Имя
const nameInput = document.querySelector("#author-name");
//строка модального окна профессиональная деятельность
const jobInput = document.querySelector("#profession");
//форма модального окна профиля
const profileFormElement = popupMain.querySelector(".popup__form");

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

//Редактирование имени и информации о себе
//Функция добавление информации из профиля в форму
const addContentFromProfile = (content, input) => {
  input.value = content.textContent;
};

//Функция добавления информации в профиль
const addContentFromInput = (content, input) => {
  content.textContent = input.value;
};

//Функция добавления информации в профиль с массива сервера
const addContentFromArr = (profileName, profileAbout, profileAvatar, arr) => {
  profileName.textContent = arr.name;
  profileAbout.textContent = arr.about;
  profileAvatar.src = arr.avatar;
};

//Функция сохранения после нажатия кнопки
function submitProfileForm(evt) {
  evt.preventDefault();
  addContentFromInput(profileTitleName, nameInput);
  addContentFromInput(profileSubtitleName, jobInput);
  closePopup(popupMain);
}

export {
  popupMain,
  editButton,
  openPopup,
  closePopup,
  profileTitleName,
  profileSubtitleName,
  nameInput,
  jobInput,
  profileFormElement,
  addContentFromInput,
  submitProfileForm,
  addContentFromProfile,
  addContentFromArr,
  profileAvatar,
};
