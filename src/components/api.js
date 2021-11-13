import {
  cardsContainer,
  createCard,
  addCard,
} from "./card.js";

import {profileTitleName, profileSubtitleName, addContentFromArr, profileAvatar} from "./modal.js"

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "d9ff5da1-b706-4c23-8de1-6bd8c391fef1",
    "Content-Type": "application/json",
  },
};

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
      addContentFromArr(profileTitleName, profileSubtitleName, profileAvatar, data);
    })
    .catch((err) => {
      console.log(err);
    });
};

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
        addCard(cardsContainer, createCard(element.name, element.link));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { config, getInitialCards, getUserProfile };
