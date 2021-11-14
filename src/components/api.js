import {
  cardsContainer,
  createCard,
  addCard,
  cardName,
  cardLink,
  popupAddCard,
} from "./card.js";

import {
  popupMain,
  profileTitleName,
  profileSubtitleName,
  addContentFromArr,
  profileAvatar,
  nameInput,
  jobInput,
  avatarLink,
  renderLoading,
  popupAvatar,
} from "./modal.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "d9ff5da1-b706-4c23-8de1-6bd8c391fef1",
    "Content-Type": "application/json",
  },
};


//Получение данных профиля с сервера
const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      addContentFromArr(
        profileTitleName,
        profileSubtitleName,
        profileAvatar,
        data
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

//Получение набора карточек с сервера
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка!!!: ${res.status}`);
    })
    .then((data) => {
      data.forEach((element) => {
        addCard(cardsContainer, createCard(element));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Функция замены данных профиля на сервере
const patchProfile = () => {
  fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      addContentFromArr(
        profileTitleName,
        profileSubtitleName,
        profileAvatar,
        data
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupMain);
    });
};

//Функция удаления мной созданной карточки
const removeCard = (cardId) => {
  fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Функция поставить лайк
const addLike = (cardId, cardLikeCounter) => {
  fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return (cardLikeCounter.textContent = data.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Функция убрать лайк
const deleteLike = (cardId, cardLikeCounter) => {
  fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return (cardLikeCounter.textContent = data.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Функция замены аватара профиля
const patchAvatar = () => {
  fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink.value,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      profileAvatar.src = data.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAvatar);
    });
};

//Функция отправки карточки на сервер
const postCard = () => {
  fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName.value,
      link: cardLink.value,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      addCard(cardsContainer, createCard(data));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAddCard);
    });
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
