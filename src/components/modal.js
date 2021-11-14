import { patchProfile } from "./api.js";
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
//модальное окно добавления аватара
const popupAvatar = document.querySelector(".popup_theme_avatar");
//Кнопка добавления нового аватара
const addAvatarButton = document.querySelector(".profile__avatar-button");
//форма модального окна добавления нового аватара
const addAvatarForm = popupAvatar.querySelector(".popup__form");
//Строка ввода ссылки на новый аватар
const avatarLink = document.querySelector("#avatar-link");

const renderLoading = (isLoading, popupElement) => {
  if (isLoading) {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранение...";
  } else {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранить";
  }
};

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
const addContentFromArr = (
  profileName,
  profileAbout,
  profileAvatar,
  serverArr
) => {
  profileName.textContent = serverArr.name;
  profileAbout.textContent = serverArr.about;
  profileAvatar.src = serverArr.avatar;
};

//Функция сохранения профиля на сервере после нажатия кнопки
function submitProfilePatch(evt) {
  evt.preventDefault();
  renderLoading(true, popupMain);
  patchProfile();
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
  addContentFromProfile,
  addContentFromArr,
  profileAvatar,
  submitProfilePatch,
  popupAvatar,
  addAvatarButton,
  addAvatarForm,
  avatarLink,
  renderLoading,
};
