//Открытие и закрытие модального окна
const editButton = document.querySelector(".profile__edit-button");
const popupMain = document.querySelector(".popup_theme_main");
//Функция попапа картинки
const popupImgOpen = document.querySelector(".popup_theme_img");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", () => {
  openPopup(popupMain);
});

popupMain.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupMain);
  }
});

//Заполнение полей формы

const profileTitleName = document.querySelector(".profile__title");
const profileSubtitleName = document.querySelector(".profile__subtitle");

const nameInput = document.querySelector("#author-name");
const jobInput = document.querySelector("#profession");
nameInput.value = profileTitleName.textContent;
jobInput.value = profileSubtitleName.textContent;

//Редактирование имени и информации о себе

const formElement = popupMain.querySelector(".popup__form");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitleName.textContent = nameInput.value;
  profileSubtitleName.textContent = jobInput.value;
  closePopup(popupMain);
}

formElement.addEventListener("submit", formSubmitHandler);

//Шесть карточек «из коробки» + функция добавления новой карточки + лайки+ удаление карточки
const cardsContainer = document.querySelector(".cards__list");

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
      addImgPopup(popupImgOpen, cardNameValue, cardLinkValue);
      openPopup(popupImgOpen);
    });
  return cardElement;
}

function addCard(container, cardElementAdd) {
  container.prepend(cardElementAdd);
}

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

initialCards.forEach((element) => {
  addCard(cardsContainer, createCard(element.name, element.link));
});

//Форма добавления новой карточки

const addCardButton = document.querySelector(".profile__add-button");
const popupAddcard = document.querySelector(".popup_theme_card");
addCardButton.addEventListener("click", () => {
  openPopup(popupAddcard);
});

popupAddcard.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupAddcard);
  }
});

const formCardElement = popupAddcard.querySelector(".popup__form");

function formSubmitCard(evt) {
  evt.preventDefault();
  const cardName = document.querySelector("#card-name");
  const cardLink = document.querySelector("#card-link");
  addCard(cardsContainer, createCard(cardName.value, cardLink.value));
  cardName.closest("form").reset();
  closePopup(popupAddcard);
}

formCardElement.addEventListener("submit", formSubmitCard);

//Функция попапа картинки

function addImgPopup(popup, cardForPopup, imgLinkForPopup) {
  const imgPopupContainer = popup.querySelector(".popup__img");
  imgPopupContainer.src = imgLinkForPopup;
  imgPopupContainer.alt = cardForPopup;
  popup.querySelector(".popup__caption").textContent = cardForPopup;
}

popupImgOpen.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close-button") ||
    event.target.classList.contains("popup")
  ) {
    closePopup(popupImgOpen);
  }
});
