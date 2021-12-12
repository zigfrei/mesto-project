//Класс Api
export default class Api{
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

//Проверка ответа от сервера на корректность
_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

//Получение данных профиля с сервера +
getUserProfile() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
  }).then((res) => this._checkResponse(res));
};

//Получение набора карточек с сервера
getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers,
  }).then((res) => this._checkResponse(res));
};

//Функция замены данных профиля на сервере
patchProfile(nameInput, jobInput) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    }),
  }).then((res) => this._checkResponse(res));
};

//Функция удаления мной созданной карточки
removeCard (cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => this._checkResponse(res));
};

addLike(cardId, cardLikeCounter) {
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: this._headers,
  }).then((res) => this._checkResponse(res));
};

deleteLike (cardId, cardLikeCounter) {
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => this._checkResponse(res));
};

//Функция замены аватара профиля
patchAvatar(avatarLink) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      avatar: avatarLink.value,
    }),
  }).then((res) => this._checkResponse(res));
};

//Функция отправки карточки на сервер
postCard(cardName, cardLink) {
  return fetch(`${this._baseUrl}/cards`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({
      name: cardName.value,
      link: cardLink.value,
    }),
  }).then((res) => this._checkResponse(res));
};

}
