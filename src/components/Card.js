import { api } from "../utils/constants.js";

export default class Card {
  constructor(cardObject, profileId, selector, handleCardClick) {
    this.cardObject = cardObject;
    this._selector = selector;
    this.profileId = profileId;
    this.handleCardClick = handleCardClick;
  }

  //Обработчик для удаления карточки
  _handleRemoveCard(cardElement, cardId, deleteCard) {
    api
      .removeCard(cardId)
      .then(() => deleteCard)
      .catch((err) => {
        console.log(err);
      });
  }

  //Обработчик для лайка карточки
  _handleLikeCard(cardElement, cardId, cardLikeCounter) {
    if (!cardElement.classList.contains("cards__like-button_status_active")) {
      api
        .addLike(cardId, cardLikeCounter)
        .then((data) => {
          this._toggleLikeCard(cardElement, cardLikeCounter, data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .deleteLike(cardId, cardLikeCounter)
        .then((data) => {
          this._toggleLikeCard(cardElement, cardLikeCounter, data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Получаем template картоку с селекторами
  _getElement() {
    const cardTemplate = document
      .querySelector(this._selector)
      .content.querySelector(".cards__body")
      .cloneNode(true);
    const cardElement = {
      cardImgContainer: cardTemplate.querySelector(".cards__img"),
      cardLikeCounter: cardTemplate.querySelector(".cards__like-counter"),
      cardLikeButton: cardTemplate.querySelector(".cards__like-button"),
      cardRemoveButton: cardTemplate.querySelector(".cards__remove-button"),
      cardTitle: cardTemplate.querySelector(".cards__title"),
    };
    return { cardElement, cardTemplate };
  }

  //функция устанвления наличия нашего лайка
  controlLikes(arrLikesElement, profileId) {
    return arrLikesElement.some((el) => el._id == profileId); ///добавить ид
  }

  //Добавление характеристик в template карточку
  _cardSettings(card) {
    card.cardImgContainer.src = this.cardObject.link;
    card.cardImgContainer.alt = this.cardObject.name;
    card.cardTitle.textContent = this.cardObject.name;
    card.cardLikeCounter.textContent = this.cardObject.likes.length;
    //Скрываем кнопку удаления карточки если не мы ее создатели
    if (this.cardObject.owner._id == this.profileId) {
      card.cardRemoveButton.style.display = "block";
    }
    //проставить лайки где раньше ставил
    if (this.controlLikes(this.cardObject.likes, this.profileId)) {
      card.cardLikeButton.classList.add("cards__like-button_status_active");
    }
  }

  //Функция добавления слушателей
  _addListeners(card) {
    const sel = this;
    // слушатель лайка при клике
    card.cardElement.cardLikeButton.addEventListener("click", function (evt) {
      sel._handleLikeCard(
        evt.target,
        sel.cardObject._id,
        card.cardElement.cardLikeCounter
      );
    });
    // слушатель удаления при клике
    card.cardElement.cardRemoveButton.addEventListener("click", function (evt) {
      sel._handleRemoveCard(
        card.cardTemplate,
        sel.cardObject._id,
        sel._deleteCard(card.cardTemplate)
      );
    });
    // слушатель открытия модального окна при клике на картинку
    card.cardElement.cardImgContainer.addEventListener("click", function () {
      sel.handleCardClick(sel.cardObject.name, sel.cardObject.link);
    });
  }

  createCard() {
    const cardElementWithSettings = this._getElement();
    this._cardSettings(cardElementWithSettings.cardElement);
    this._addListeners(cardElementWithSettings);
    return cardElementWithSettings.cardTemplate;
  }

  _deleteCard(cardElement) {
    cardElement.remove();
    cardElement = null;
  }

  _toggleLikeCard(likeElement, cardLikeCounter, cardArray) {
    likeElement.classList.toggle("cards__like-button_status_active");
    return (cardLikeCounter.textContent = cardArray.likes.length);
  }
}
