import "./index.css";
import {
  popupMain,
  editButton,
  profileTitleName,
  profileSubtitleName,
  profileAvatar,
  nameInput,
  jobInput,
  popupAvatar,
  addAvatarButton,
  cardsContainer,
  popupImgOpen,
  addCardButton,
  popupAddCard,
  avatarLink,
  cardName,
  cardLink,
  cardTemp,
  selectors,
  forms,
  config,
  selectorInfo,
  buttonSubmit
} from "../components/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

//Создадим элемент класса UserInfo
const info = new UserInfo(selectorInfo);


//Создадим элемент класса Api и передадие ему настройки
const api = new Api(config);

// добавление валидации для всех модальных окон
forms.forEach((form) => {
  const valid = new FormValidator(selectors, form);
  valid.enableValidation();
});

//Функция открытия попапа картинки при клике на картинку
function handleCardClick(cardTitle, cardImage) {
  const popupImg = new PopupWithImage(popupImgOpen);
  popupImg.setEventListeners();
  popupImg.openPopup(cardImage, cardTitle);
}

//Обработчик для удаления карточки
function handleRemoveCard(cardElement, cardId) {
  api
    .removeCard(cardId)
    .then(() => this._deleteCard(cardElement))
    .catch((err) => {
      console.log(err);
    });
}

//Обработчик для лайка карточки
function handleLikeCard(cardElement, cardId, cardLikeCounter) {
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

//индивидуальный номер профиля
let profileId = 0;

//Функция добавления информации в профиль с массива сервера !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const addContentFromArr = (
  profileName,
  profileAbout,
  profileAvatar,
  serverArr
) => {
  profileName.textContent = serverArr.name;
  profileAbout.textContent = serverArr.about;
  profileAvatar.src = serverArr.avatar;
  profileId = serverArr._id;
};

//функция добавления карточки в контейнер
function addCard(container, cardElementAdd) {
  container.prepend(cardElementAdd);
}

const renderLoading = (isLoading, popupElement) => {
  if (isLoading) {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранение...";
  } else {
    popupElement.querySelector(".popup__submit-button").textContent =
      "Сохранить";
  }
};

  //Этот функцию надо использовать в index.js.... но пока не получается
  function disableSubmitButton (elementForm) {
    const buttonElement = elementForm.querySelector(selectors.submitButtonSelector);
    buttonElement.classList.add(selectors.inactiveButtonClass);
  }

//Функция добавления нового аватара по нажатию кнопки в модальном окне
function handleSubmitAvatarForm() {
  renderLoading(true, popupAvatar);
  api
    .patchAvatar(avatarLink)
    .then((data) => {
      profileAvatar.src = data.avatar;
      this.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAvatar);
      disableSubmitButton(popupAvatar);
    });
}

//Создание элемента класса попар с формой для аватара
const popupEditAvatar = new PopupWithForm(popupAvatar, handleSubmitAvatarForm);

//слушатель нажатия на кнопку добавления аватара
addAvatarButton.addEventListener("click", () => {
  popupEditAvatar.openPopup();
  popupEditAvatar.setEventListeners();
});

//Функция сохранения информации профиля на сервере после нажатия кнопки
function handleSubmitProfileForm() {
  renderLoading(true, popupMain);
  api
    .patchProfile(nameInput, jobInput)
    .then((data) => {
      info.setUserInfo(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditPersonalInfo.closePopup();
      renderLoading(false, popupMain);
      disableSubmitButton(popupMain);
    });
}

//Создание элемента класса попар с формой для профиля
const popupEditPersonalInfo = new PopupWithForm(
  popupMain,
  handleSubmitProfileForm
);

//Слушатель нажатия на кнопку редактора профиля
editButton.addEventListener("click", () => {
  nameInput.value = info.getUserInfo().name;
  jobInput.value = info.getUserInfo().about;
  popupEditPersonalInfo.openPopup();
  popupEditPersonalInfo.setEventListeners();
});

//Функция добавления карточки из модального окна
function handleSubmitCardForm() {
  renderLoading(true, popupAddCard);
  api
    .postCard(cardName, cardLink)
    .then((data) => {
      addCard(
        cardsContainer,
        new Card(
          data,
          profileId,
          cardTemp,
          handleCardClick,
          handleRemoveCard,
          handleLikeCard
        ).createCard()
      );
      popupEditCard.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAddCard);
      disableSubmitButton(popupAddCard);
    });
}

const popupEditCard = new PopupWithForm(popupAddCard, handleSubmitCardForm);

//Слушатель нажатия на кнопку для открытия модального окна "добавить карточку"
addCardButton.addEventListener("click", () => {
  popupEditCard.setEventListeners();
  popupEditCard.openPopup();
});

Promise.all([api.getInitialCards(), api.getUserProfile()])
  .then(([cardsData, userInfo]) => {
    const sectionCards = new Section(
      {
        items: cardsData,
        renderer: (element) => {
          const cardElement = new Card(
            element,
            userInfo._id,
            cardTemp,
            handleCardClick,
            handleRemoveCard,
            handleLikeCard
          ).createCard();
          sectionCards.setItem(cardElement);
        },
      },
      cardsContainer
    );
    sectionCards.renderItems();

    addContentFromArr(
      profileTitleName,
      profileSubtitleName,
      profileAvatar,
      userInfo
    );
  })
  .catch((err) => {
    console.log(err);
  });
