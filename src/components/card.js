import { openPopup, closePopup } from "../components/modal.js";
//Перечень всех карточек
const cardsContainer = document.querySelector(".cards__list");
//модально окно изображения
const popupImgOpen = document.querySelector(".popup_theme_img");
//Кнопка добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
//Модальное окно добавления карточки
const popupAddCard = document.querySelector(".popup_theme_card");
//Форма добавления карточки
const formCardElement = popupAddCard.querySelector(".popup__form");

//Функция создания карточки
function createCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".cards__body")
    .cloneNode(true);
  const cardImgContainer = cardElement.querySelector(".cards__img");

  cardElement.querySelector(".cards__title").textContent = cardNameValue;
  cardImgContainer.src = cardLinkValue;
  cardImgContainer.alt = cardNameValue;
  cardElement
    .querySelector(".cards__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("cards__like-button_status_active");
    });
  cardElement
    .querySelector(".cards__remove-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".cards__body").remove();
    });

  cardElement
    .querySelector(".cards__img")
    .addEventListener("click", function () {
      updateImgPopup(popupImgOpen, cardNameValue, cardLinkValue);
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
  const cardName = document.querySelector("#card-name");
  const cardLink = document.querySelector("#card-link");
  addCard(cardsContainer, createCard(cardName.value, cardLink.value));
  formCardElement.reset();
  closePopup(popupAddCard);
}

//Массив объектов карточек по заводу
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export {
  cardsContainer,
  createCard,
  popupImgOpen,
  addCard,
  initialCards,
  addCardButton,
  popupAddCard,
  formCardElement,
  addCardFromPopup,
};
