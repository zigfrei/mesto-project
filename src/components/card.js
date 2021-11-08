import {openPopup, closePopup} from '../components/modal.js';
//Перечень всех карточек
const cardsContainer = document.querySelector(".cards__list");
//модально окно изображения
const popupImgOpen = document.querySelector(".popup_theme_img");
//Кнопка добавления карточки
const addCardButton = document.querySelector(".profile__add-button");
//Модальное окно добавления карточки
const popupAddcard = document.querySelector(".popup_theme_card");
//Форма добавления карточки
const formCardElement = popupAddcard.querySelector(".popup__form");

//Картинки для Webpack
// const Arhiz = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg", import.meta.url);
// const Chelyabinsk = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg", import.meta.url);
// const Ivanovo = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg", import.meta.url);
// const Kamchatka = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg", import.meta.url);
// const Kholmogorsky = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg", import.meta.url);
// const Baikal = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg", import.meta.url);

//Функция создания карточки
function createCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".cards__body")
    .cloneNode(true);
  const cardImgContainer = cardElement.querySelector(".cards__img");

  cardElement.querySelector(".cards__title").textContent = cardNameValue;
  // cardImgContainer.src = `<%=require(${cardLinkValue})%>`;
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
      addImgPopup(popupImgOpen, cardNameValue, cardLinkValue);
      openPopup(popupImgOpen);
    });
  return cardElement;
}

//Функция открытия модального окна картинки карточки
function addImgPopup(popup, cardForPopup, imgLinkForPopup) {
  const imgPopupContainer = popup.querySelector(".popup__img");
  imgPopupContainer.src = imgLinkForPopup;
  imgPopupContainer.alt = cardForPopup;
  popup.querySelector(".popup__caption").textContent = cardForPopup;
}

//функция добавления карточки в контейнер
function addCard(container, cardElementAdd) {
  container.prepend(cardElementAdd);
}

//Функция добавления карточки из модального окна
function formSubmitCard(evt) {
  evt.preventDefault();
  const cardName = document.querySelector("#card-name");
  const cardLink = document.querySelector("#card-link");
  addCard(cardsContainer, createCard(cardName.value, cardLink.value));
  cardName.closest("form").reset();
  closePopup(popupAddcard);
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

export {cardsContainer, createCard, popupImgOpen, addCard, initialCards, addCardButton, popupAddcard, formCardElement, formSubmitCard};
