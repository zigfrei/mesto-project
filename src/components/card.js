import {
  openPopup,
  closePopup,
  profileTitleName,
  renderLoading,
} from "../components/modal.js";
import { postCard, addLike, deleteLike, removeCard } from "./api.js";
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

//Функция проверки проставления лайка на карточке
const controlLikes = (arrLikesElement) => {
  return arrLikesElement.some((el) => el.name == profileTitleName.textContent);
};

//Функция создания карточки
function createCard(cardObject) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".cards__body")
    .cloneNode(true);
  const cardImgContainer = cardElement.querySelector(".cards__img");
  const cardLikeCounter = cardElement.querySelector(".cards__like-counter");
  const cardLikeButton = cardElement.querySelector(".cards__like-button");
  const cardRemoveButton = cardElement.querySelector(".cards__remove-button");
  cardLikeCounter.textContent = cardObject.likes.length;

  cardElement.querySelector(".cards__title").textContent = cardObject.name;
  cardImgContainer.src = cardObject.link;
  cardImgContainer.alt = cardObject.name;
  //проставить лайки где раньше ставил
  if (controlLikes(cardObject.likes)) {
    cardLikeButton.classList.add("cards__like-button_status_active");
  }

  cardLikeButton.addEventListener("click", function (evt) {
    if (!evt.target.classList.contains("cards__like-button_status_active")) {
      addLike(cardObject._id, cardLikeCounter);
    } else {
      deleteLike(cardObject._id, cardLikeCounter);
    }
    evt.target.classList.toggle("cards__like-button_status_active");
  });

  if (cardObject.owner.name == profileTitleName.textContent) {
    cardRemoveButton.style.display = "block";
  }

  cardRemoveButton.addEventListener("click", function (evt) {
    removeCard(cardObject._id);
    cardElement.remove();
  });

  cardElement
    .querySelector(".cards__img")
    .addEventListener("click", function () {
      updateImgPopup(popupImgOpen, cardObject.name, cardObject.link);
      openPopup(popupImgOpen);
    });
  return cardElement;
}

//Функция открытия модального окна картинки карточки
function updateImgPopup(popup, cardTitle, cardImage) {
  const imgPopupContainer = popup.querySelector(".popup__img");
  imgPopupContainer.src = cardImage;
  imgPopupContainer.alt = cardTitle;
  popup.querySelector(".popup__caption").textContent = cardTitle;
}

//функция добавления карточки в контейнер
function addCard(container, cardElementAdd) {
  container.prepend(cardElementAdd);
}

//Функция добавления карточки из модального окна
function addCardFromPopup(evt) {
  evt.preventDefault();
  renderLoading(true, popupAddCard);
  postCard();
  formCardElement.reset();
  closePopup(popupAddCard);
}

export {
  cardsContainer,
  createCard,
  popupImgOpen,
  addCard,
  addCardButton,
  popupAddCard,
  formCardElement,
  addCardFromPopup,
  cardName,
  cardLink,
};
