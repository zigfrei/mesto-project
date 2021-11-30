import {
  nameInput,
  jobInput,
  avatarLink,
  cardName,
  cardLink,
} from "./constants.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "d9ff5da1-b706-4c23-8de1-6bd8c391fef1",
    "Content-Type": "application/json",
  },
};

//Класс Api
class Api{
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

//Проверка ответа от сервера на корректность
checkForBugs(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

//Получение данных профиля с сервера +
getUserProfile() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
  }).then((res) => checkForBugs(res));
};

//Получение набора карточек с сервера
getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers,
  }).then((res) => checkForBugs(res));
};

//Функция замены данных профиля на сервере
patchProfile() {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    }),
  }).then((res) => checkForBugs(res));
};

//Функция удаления мной созданной карточки
removeCard (cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => checkForBugs(res));
};

}


//Код проверки запроса на корректность
const checkForBugs = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

//Получение данных профиля с сервера
const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => checkForBugs(res));
};

//Получение набора карточек с сервера
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkForBugs(res));
};

//Функция замены данных профиля на сервере
const patchProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    }),
  }).then((res) => checkForBugs(res));
};

//Функция удаления мной созданной карточки
const removeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkForBugs(res));
};

//Функция поставить лайк +
const addLike = (cardId, cardLikeCounter) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => checkForBugs(res));
};

//Функция убрать лайк +
const deleteLike = (cardId, cardLikeCounter) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkForBugs(res));
};

//Функция замены аватара профиля +
const patchAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink.value,
    }),
  }).then((res) => checkForBugs(res));
};

//Функция отправки карточки на сервер +
const postCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName.value,
      link: cardLink.value,
    }),
  }).then((res) => checkForBugs(res));
};

export {
  config,
  getInitialCards,
  getUserProfile,
  patchProfile,
  postCard,
  addLike,
  deleteLike,
  patchAvatar,
  removeCard,
};
