import { profileTitleName, popupImgOpen } from "./constants.js";
import { openPopup } from "../components/modal.js";

//Функция проверки проставления лайка на карточке
const controlLikes = (arrLikesElement, profileId) => {
  return arrLikesElement.some((el) => el._id == profileId);
};

//Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
  cardElement = null;
}

function toggleLikeCard(likeElement, cardLikeCounter, cardArray) {
  likeElement.classList.toggle("cards__like-button_status_active");
  return (cardLikeCounter.textContent = cardArray.likes.length);
}

//Функция создания карточки
function createCard(cardObject, profileId, handleDeleteButton, handleLikeCard) {
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
  if (controlLikes(cardObject.likes, profileId)) {
    cardLikeButton.classList.add("cards__like-button_status_active");
  }

  //Слушатель проставления изменения состояния лайка по нажатию
  cardLikeButton.addEventListener("click", function (evt) {
    handleLikeCard(evt.target, cardObject._id, cardLikeCounter);
  });

  //Скрываем кнопку удаления карточки если не мы ее создатели
  if (cardObject.owner._id == profileId) {
    cardRemoveButton.style.display = "block";
  }

  //Слушатель удаления карточки по клику на кнопку
  cardRemoveButton.addEventListener("click", function (evt) {
    handleDeleteButton(cardElement, cardObject._id);
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

export { createCard, deleteCard, toggleLikeCard };


