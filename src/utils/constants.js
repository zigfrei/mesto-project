import Api from "../components/Api.js";
//селектор модального окна редактирования профиля
const popupMain = ".popup_theme_main";
const elementPopupMain = document.querySelector(popupMain);
//селектор модального окна добавления аватара
const popupAvatar = ".popup_theme_avatar";
const elementPopupAvatar = document.querySelector(popupAvatar);
//селектор модального окна изображения
const popupImgOpen = ".popup_theme_img";
//селектор модального окна добавления карточки
const popupAddCard = ".popup_theme_card";
const elementPopupAddCard = document.querySelector(popupAddCard);

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
//селектор модального окна добавления аватара
const addAvatarButton = document.querySelector(".profile__avatar-button");
//Строка ввода ссылки на новый аватар
const avatarLink = document.querySelector("#avatar-link");

//Перечень всех карточек
const cardsContainer = ".cards__list";
const cardsContainerElement = document.querySelector(cardsContainer);
//Строка ввода названия карточки в попапе
const cardName = document.querySelector("#card-name");
//Строка ввода ссылки на картинку карточки в попапе
const cardLink = document.querySelector("#card-link");
//Кнопка добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
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

const popupAvatarForm = elementPopupAvatar.querySelector(".popup__form");
const popupMainForm = elementPopupMain.querySelector(".popup__form");
const popupAddCardForm = elementPopupAddCard.querySelector(".popup__form");

const selectorsAndFormClasses = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
  inputError: ".popup__field-error",
};

const profileSelectors = {
  name: ".profile__title",
  about: ".profile__subtitle",
  avatar: ".profile__avatar",
  id: "",
};

//Создадим элемент класса Api и передадие ему настройки
const api = new Api(config);

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
  selectorsAndFormClasses,
  profileSelectors,
  elementPopupMain,
  elementPopupAvatar,
  elementPopupAddCard,
  cardsContainerElement,
  popupAvatarForm,
  popupMainForm,
  popupAddCardForm,
  api,
};
