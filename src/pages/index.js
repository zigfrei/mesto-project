import "./index.css";
import {
  popupMain,
  editButton,
  nameInput,
  jobInput,
  popupAvatar,
  addAvatarButton,
  cardsContainer,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  avatarLink,
  cardName,
  cardLink,
  cardTemp,
  selectorsAndFormClasses,
  profileSelectors,
  elementPopupMain,
  elementPopupAvatar,
  elementPopupAddCard,
  popupAvatarForm,
  popupMainForm,
  popupAddCardForm,
  api,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

// //Создадим элемент класса UserInfo
const info = new UserInfo(profileSelectors);

//Функция создания новой карточки
function createCard(element) {
  const cardElement = new Card(
    element,
    JSON.parse(sessionStorage.getItem("profileId")),
    cardTemp,
    handleCardClick
  );
  return cardElement.createCard();
}

const sectionCard = new Section(
  {
    items: "",
    renderer: (el) => {
      sectionCard.setItem(createCard(el));
    },
  },
  cardsContainer
);

//Cоздание элемента класса модального окна картинки
const popupImg = new PopupWithImage(popupImgOpen);
popupImg.setEventListeners();

//Функция открытия попапа картинки при клике на картинку
function handleCardClick(cardTitle, cardImage) {
  popupImg.openPopup(cardImage, cardTitle);
}

const renderLoading = (isLoading, popupElement) => {
  if (isLoading) {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранение...";
  } else {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранить";
  }
};

//Функция добавления нового аватара по нажатию кнопки в модальном окне
function handleSubmitAvatarForm() {
  renderLoading(true, elementPopupAvatar);
  api
    .patchAvatar(avatarLink)
    .then((data) => {
      info.setUserInfo(data);
      popupEditAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, elementPopupAvatar);
    });
}

//Создание элемента класса модального окна с формой для аватара
const popupEditAvatar = new PopupWithForm(popupAvatar, handleSubmitAvatarForm);
popupEditAvatar.setEventListeners();
const validAvatarPopup = new FormValidator(
  selectorsAndFormClasses,
  popupAvatarForm
);
validAvatarPopup.enableValidation();

//слушатель нажатия на кнопку добавления аватара
addAvatarButton.addEventListener("click", () => {
  validAvatarPopup.disableSubmitButton();
  popupEditAvatar.openPopup();
});

//Функция сохранения информации профиля на сервере после нажатия кнопки
function handleSubmitProfileForm() {
  renderLoading(true, elementPopupMain);
  api
    .patchProfile(nameInput, jobInput)
    .then((data) => {
      info.setUserInfo(data);
      popupEditPersonalInfo.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, elementPopupMain);
    });
}

//Создание элемента класса попар с формой для профиля
const popupEditPersonalInfo = new PopupWithForm(
  popupMain,
  handleSubmitProfileForm
);
popupEditPersonalInfo.setEventListeners();
const validMainPopup = new FormValidator(
  selectorsAndFormClasses,
  popupMainForm
);
validMainPopup.enableValidation();

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  const getInfo = info.getUserInfo();
  nameInput.value = getInfo.name;
  jobInput.value = getInfo.about;
  popupEditPersonalInfo.openPopup();
});

//Функция добавления карточки из модального окна
function handleSubmitCardForm() {
  renderLoading(true, elementPopupAddCard);
  api
    .postCard(cardName, cardLink)
    .then((data) => {
      sectionCard.prependItem(data);
      popupEditCard.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, elementPopupAddCard);
    });
}

const popupEditCard = new PopupWithForm(popupAddCard, handleSubmitCardForm);
popupEditCard.setEventListeners();
const validAddCardPopup = new FormValidator(
  selectorsAndFormClasses,
  popupAddCardForm
);
validAddCardPopup.enableValidation();

//Слушатель нажатия на кнопку для открытия модального окна "добавить карточку"
addCardButton.addEventListener("click", () => {
  validAddCardPopup.disableSubmitButton();
  popupEditCard.openPopup();
});

Promise.all([api.getInitialCards(), api.getUserProfile()])
  .then(([cardsData, userInfo]) => {
    sectionCard.renderItems(cardsData);
    info.setUserInfo(userInfo);
  })
  .catch((err) => {
    console.log(err);
  });
