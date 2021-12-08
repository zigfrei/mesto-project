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
//Форма добавления карточки
const formCardElement = popupAddCard.querySelector(".popup__form");
// Запрос всех форм 
const forms = document.querySelectorAll(".popup__form");
export {
  popupMain,
  editButton,
  profileTitleName,
  profileSubtitleName,
  profileAvatar,
  nameInput,
  jobInput,
  profileFormElement,
  popupAvatar,
  addAvatarButton,
  addAvatarForm,
  avatarLink,
  cardsContainer,
  cardName,
  cardLink,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  formCardElement,
  forms
};
