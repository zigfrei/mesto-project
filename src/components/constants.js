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
//модальное окно добавления аватара
const popupAvatar = document.querySelector(".popup_theme_avatar");
//Кнопка добавления нового аватара
const addAvatarButton = document.querySelector(".profile__avatar-button");
//Строка ввода ссылки на новый аватар
const avatarLink = document.querySelector("#avatar-link");

//Перечень всех карточек
const cardsContainer = document.querySelector(".cards__list");
//Строка ввода названия карточки в попапе
const cardName = document.querySelector("#card-name");
//Строка ввода ссылки на картинку карточки в попапе
const cardLink = document.querySelector("#card-link");
//модально окно изображения
const popupImgOpen = document.querySelector(".popup_theme_img");
//Кнопка добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
//Модальное окно добавления карточки
const popupAddCard = document.querySelector(".popup_theme_card");
//Селектор template карточки
const cardTemp = "#card-template";
//Конфиг входа с токеном и заголовками
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "d9ff5da1-b706-4c23-8de1-6bd8c391fef1",
    "Content-Type": "application/json",
  },
};
const items = [];

// Запрос всех форм
const forms = document.querySelectorAll(".popup__form");
const selectors = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
  inputError: ".popup__field-error",
};

export {
  popupMain,
  editButton,
  profileTitleName,
  profileSubtitleName,
  profileAvatar,
  nameInput,
  jobInput,
  popupAvatar,
  addAvatarButton,
  avatarLink,
  cardsContainer,
  cardName,
  cardLink,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  cardTemp,
  selectors,
  forms,
  config,
  items
};
